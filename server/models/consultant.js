const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { addUser } = require('./user');

const timeSchema = new mongoose.Schema(
  {
    hours: {
      type: Number,
      required: true,
      min: 0,
      max: 23,
    },
    minutes: {
      type: Number,
      required: true,
      min: 0,
      max: 59,
    },
  },
  { _id: false }
);

const appointmentTimesSchema = new mongoose.Schema(
  {
    from: {
      type: timeSchema,
      required: true,
    },
    to: {
      type: timeSchema,
      required: true,
    },
  },
  { _id: false }
);

const consultantSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
    // TODO: Specify major enum
  },
  yearOfGraduation: {
    type: Number,
    required: true,
    max: new Date().getFullYear() + 1,
  },
  currentPlacement: {
    type: String,
    required: false,
    maxLength: 255,
    default: '',
  },
  bio: {
    type: String,
    required: false,
    maxLength: 255,
    default: '',
  },
  appointmentTimes: {
    type: [appointmentTimesSchema],
    required: true,
    default: [],
  },
  reported: {
    type: Boolean,
    required: true,
    default: false,
  },
  deactivated: {
    type: Boolean,
    required: true,
    default: false,
  }
});

consultantSchema.set('toObject', { getters: true });
consultantSchema.set('toJSON', { getters: true });

const Consultant = mongoose.model('consultant', consultantSchema);

const addConsultant = (
  email,
  password,
  displayName,
  major,
  yearOfGraduation,
  currentPlacement,
  bio
) =>
  Consultant({
    displayName,
    major,
    yearOfGraduation,
    currentPlacement,
    bio,
  })
    .save()
    .then(({ _id }) =>
      addUser(_id.toString(), email, password, userTypes.CONSULTANT)
    );

const getConsultantById = (id) => Consultant.findById(id).exec();

const updateConsultant = (id, attr) =>
  getConsultantById(id)
    .then((obj) =>
      obj.overwrite({
        ...obj.toObject(),
        ...attr,
      })
    )
    .then((obj) => obj.save());

const setAppointmentTimes = (id, appointmentTimes) =>
  getConsultantById(id)
    .then((obj) => {
      obj.appointmentTimes = appointmentTimes;
      return obj;
    })
    .then((obj) => obj.save());

const getAppointmentTimes = (id) =>
  getConsultantById(id).then((obj) => obj.appointmentTimes);

const searchConsultant = (searchInput) => Consultant.find(searchInput).exec();

const getConsultants = () => Consultant.find({}).exec();

const getReportedConsultants = () => Consultant.find({ reported: true }).populate('displayName').exec();

const falseReportOfConsultant = (reportedConsultantId) => 
  Consultant.updateOne(
    { _id: reportedConsultantId },
    { $set: {reported: false} }
).exec();

const deactivateConsultant = (consultantId) => 
  Consultant.updateOne(
  { _id: consultantId },
  { $set: {deactivated: true} }
).exec();

module.exports = {
  addConsultant,
  getConsultantById,
  updateConsultant,
  searchConsultant,
  getConsultants,
  setAppointmentTimes,
  getAppointmentTimes,
  getReportedConsultants,
  falseReportOfConsultant,
  deactivateConsultant
};
