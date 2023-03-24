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
    min: new Date().getFullYear(),
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

function addClient(email, password, displayName, major, yearOfGraduation, bio) {
  return Client({ displayName, major, yearOfGraduation, bio })
    .save()
    .then(({ _id }) =>
      addUser(_id.toString(), email, password, userTypes.CLIENT)
    );
}

module.exports = { addClient };
