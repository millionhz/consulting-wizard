const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { createUser } = require('../utils/firebaseAuth');

const userSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: Object.values(userTypes) },
  createdTime: { type: Date, required: true, default: Date.now },
  // TODO: Move field to client and consultant
  isDeactivated: { type: Boolean, required: true, default: false },
});

userSchema.set('toObject', { getters: true });

const User = mongoose.model('User', userSchema);

const addUser = (id, email, password, type) =>
  User({ _id: id, type })
    .save()
    .then(({ _id }) => createUser(_id.toString(), email, password));

const getUserById = (uid) => User.findById(uid).exec();

// TODO: Will return ids that need to be joined with other collections
const getDeactivatedUsers = () => User.find({ isDeactivated: true }).exec();

module.exports = { addUser, getUserById, getDeactivatedUsers };
