const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { createUser, validateToken } = require('../utils/firebaseAuth');

const userSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: Object.values(userTypes) },
  createdTime: { type: Date, required: true, default: new Date().toString()},
  isVerified: {type: Boolean, required: true, default: false},
  isDeactivated: {type: Boolean, default: false},
});

const User = mongoose.model('User', userSchema);

function addUser(email, password) {
  return User({ type: userTypes.CLIENT, isVerified: false})
    .save()
    .then(({ _id }) => createUser(_id.toString(), email, password));
}

function getUserById(uid) {
  return User.findById(uid).exec();
}

function getUserByToken(token) {
  let retObj = {};
  return validateToken(token)
    .then((userObj) => {
      const { uid } = userObj;
      retObj = { ...userObj };
      return getUserById(uid);
    })
    .then((userObj) => ({ ...retObj, ...userObj.toObject() }));
}

function getDeactivatedUsers() {
  return User.find({isDeactivated: true}).exec()
}

module.exports = {addUser, getUserById, getUserByToken, getDeactivatedUsers};
