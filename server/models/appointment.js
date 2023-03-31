const mongoose = require('mongoose')


const appointmentSchema = new mongoose.Schema({
    student: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    counsellor: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    isCancelled: {type: Boolean, default: false},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true}
})


const Appointment = mongoose.model('Appointment',appointmentSchema)

module.exports = Appointment