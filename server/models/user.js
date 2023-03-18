const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { createUser } = require('../utils/auth');

const userSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: Object.values(userTypes) },
  createdTime: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model('User', userSchema);

function addUser(email, password) {
  return User({ type: userTypes.CLIENT })
    .save()
    .then(({ _id }) => createUser(_id.toString(), email, password));
}

module.exports = { addUser };
