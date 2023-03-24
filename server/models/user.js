const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { createUser } = require('../utils/firebaseAuth');

const userSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: Object.values(userTypes) },
  createdTime: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model('User', userSchema);

function addUser(id, email, password, type) {
  return User({ _id: id, type })
    .save()
    .then(({ _id }) => createUser(_id.toString(), email, password));
}

function getUserById(uid) {
  return User.findById(uid).exec();
}

module.exports = { addUser, getUserById };
