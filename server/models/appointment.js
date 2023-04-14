const mongoose = require('mongoose');
const { now } = require('../utils/dateTime');

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

const getAppointmentById = (id) => Appointment.findById(id).exec();

const getAppointmentByConsultantAndDate = (consultant, from, to) =>
  Appointment.find({
    consultant,
    from: {
      $gte: from,
    },
    to: {
      $lte: to,
    },
  }).exec();

const getAppointmentsByClientID = (client) =>
  Appointment.find({
    client,
  })
    .populate('consultant')
    .exec();

const getAppointmentsByConsultantID = (consultant) =>
  Appointment.find({
    consultant,
  })
    .populate('client')
    .exec();

const bookAppointmentById = (appointmentId, client) =>
  getAppointmentById(appointmentId).then((appointment) => {
    if (appointment.from < now()) {
      throw new Error('Appointment is in the past');
    }

    if (appointment.client) {
      throw new Error('Appointment already booked');
    }

    appointment.client = client;
    return appointment.save();
  });

const viewPastAppointmentsClient = (client) =>
  getAppointmentsByClientID(client).then((appointments) => {
    const filter = (appointment) => appointment.from < now();
    return appointments.filter(filter);
  });

const viewUpcomingAppointmentsClient = (client) =>
  getAppointmentsByClientID(client).then((appointments) => {
    const filter = (appointment) => appointment.from > now();
    return appointments.filter(filter);
  });

const viewPastAppointmentsConsultant = (consultant) =>
  getAppointmentsByConsultantID(consultant).then((appointments) => {
    const filter = (appointment) => appointment.from < now();
    return appointments.filter(filter);
  });

const viewUpcomingAppointmentsConsultant = (consultant) =>
  getAppointmentsByConsultantID(consultant).then((appointments) => {
    const filter = (appointment) => appointment.from > now();
    return appointments.filter(filter);
  });

const createAppointment = (consultant, from, to) =>
  Appointment({
    consultant,
    from,
    to,
  }).save();

const deleteAppointment = (consultant, appointment) =>
  Appointment.deleteOne({ _id: appointment, consultant }).exec();

module.exports = {
  bookAppointmentById,
  viewPastAppointmentsClient,
  viewUpcomingAppointmentsClient,
  viewPastAppointmentsConsultant,
  viewUpcomingAppointmentsConsultant,
  createAppointment,
  deleteAppointment,
  getAppointmentByConsultantAndDate,
};
