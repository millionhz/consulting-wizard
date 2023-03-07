const mongoose = require('mongoose');
const userTypes = require('../utils/userTypes');
const { createUser } = require('../utils/auth');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: { type: String, required: true, enum: Object.values(userTypes) },
  createdTime: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model('User', userSchema);

function addUser(email, password) {
  const user = User({ type: userTypes.CLIENT });
  return user
    .validate()
    .then(() =>
      createUser(email, password).then(({ uid }) => user.set('_id', uid).save())
    );
}

module.exports = { addUser };
