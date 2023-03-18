const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { createUser, validateToken } = require('../utils/firebaseAuth');

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

module.exports = { addUser, getUserById, getUserByToken };
