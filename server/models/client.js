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
});

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

const getClientById = (uid) => Client.findById(uid).exec();

const updateClient = (uid, attr) =>
  getClientById(uid)
    .then((obj) =>
      obj.overwrite({
        ...obj.toObject(),
        ...attr,
      })
    )
    .then((obj) => obj.save());

module.exports = { addClient, getClientById, updateClient };
