const mongoose = require('mongoose');
const { getAppointmentTimes } = require('./consultant');

const appointmentSchema = mongoose.Schema({
  consultant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'consultant',
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client',
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
});

appointmentSchema.set('toObject', { getters: true });
appointmentSchema.set('toJSON', { getters: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

const getDateTime = (date, time) => {
  const { hours, minutes } = time;
  const dateTime = new Date(date);
  dateTime.setHours(hours);
  dateTime.setMinutes(minutes);
  dateTime.setSeconds(0);
  dateTime.setMilliseconds(0);
  return dateTime;
};

const bootstrapAppointments = (consultant, appointmentTimes, date) =>
  Promise.all(
    appointmentTimes.map(({ from, to }) =>
      Appointment({
        consultant,
        from: getDateTime(date, from),
        to: getDateTime(date, to),
      }).save()
    )
  );

const getAppointmentById = (id) => Appointment.findById(id).exec();

const getAppointmentsByConsultant = (consultant, date) =>
  Appointment.find({
    consultant,
    from: {
      $gte: date,
      $lt: new Date(date.getTime() + 24 * 60 * 60 * 1000),
    },
  });

const getAvailableAppointments = (consultant, date) =>
  getAppointmentsByConsultant(consultant, date).then((appointments) => {
    const filter = (appointment) =>
      !appointment.client && appointment.from > new Date();

    if (appointments.length !== 0) {
      return appointments.filter(filter);
    }

    return getAppointmentTimes(consultant).then((appointmentTimes) => {
      if (appointmentTimes.length === 0) {
        return [];
      }

      return bootstrapAppointments(consultant, appointmentTimes, date).then(
        (appointments_) => appointments_.filter(filter)
      );
    });
  });

const bookAppointmentById = (appointmentId, client) =>
  getAppointmentById(appointmentId).then((appointment) => {
    if (appointment.from < new Date()) {
      throw new Error('Appointment is in the past');
    }

    if (appointment.client) {
      throw new Error('Appointment already booked');
    }

    appointment.client = client;
    return appointment.save();
  });

// TODO: The semantics are correct the logic needs to reworked
const viewPastAppointments = () =>
  Appointment.find({ from: { $gt: Date.now() } })
    .populate('client')
    .populate('consultant')
    .exec();

// TODO: The semantics are correct the logic needs to reworked
const viewUpcomingAppointments = () =>
  Appointment.find({ to: { $lt: Date.now() } })
    .populate('client')
    .populate('consultant')
    .exec();

module.exports = {
  bootstrapAppointments,
  getAvailableAppointments,
  bookAppointmentById,
  viewPastAppointments,
  viewUpcomingAppointments,
};
