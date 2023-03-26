const mongoose = require('mongoose')
const userTypes = require('../utils/userTypes');


const deactivatedReqSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: Object.values(userTypes)},
  createdTime: { type: Date, required: true, default: new Date().toString()},
  isDeactivated: {type: Boolean, required: true, default: false},
})

const Deactivated = mongoose.model('Deactivated',deactivatedReqSchema)


function getDeactivatedUsers() {
    return Deactivated.find({isDeactivated: true}).exec()
}

module.exports = {getDeactivatedUsers}