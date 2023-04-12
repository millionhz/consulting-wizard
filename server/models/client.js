const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { addUser } = require('./user');

const clientSchema = new mongoose.Schema({
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
    min: new Date().getFullYear() - 1,
  },
  bio: {
    type: String,
    required: false,
    maxLength: 255,
    default: '',
  },
  reported: {
    type: Boolean,
    required: true,
    default: false,
  },
  deactivated: {
    type: Boolean,
    required: true,
    default: false
  }
});

clientSchema.set('toObject', { getters: true });
clientSchema.set('toJSON', { getters: true });

const Client = mongoose.model('client', clientSchema);

const addClient = (
  email,
  password,
  displayName,
  major,
  yearOfGraduation,
  bio
) =>
  Client({ displayName, major, yearOfGraduation, bio })
    .save()
    .then(({ _id }) =>
      addUser(_id.toString(), email, password, userTypes.CLIENT)
    );

const getClientById = (id) => Client.findById(id).exec();

const updateClient = (id, attr) =>
  getClientById(id)
    .then((obj) =>
      obj.overwrite({
        ...obj.toObject(),
        ...attr,
      })
    )
    .then((obj) => obj.save());

const reportClient = (reportedId) =>
  Client.updateOne(reportedId, { $set: { reported: true } }).exec();

const getReportedClients = () => Client.find({ reported: true }).populate('displayName').exec();

const falseReportOfClient = (reportedClientId) => 
  Client.updateOne(
    { _id: reportedClientId },
    { $set: {reported: false} }
).exec();

const deactivateClient = (clientId) => 
  Client.updateOne(
  { _id: clientId },
  { $set: {deactivated: true} }
).exec();

module.exports = { addClient, getClientById, updateClient, getReportedClients, deactivateClient, falseReportOfClient, reportClient, };

