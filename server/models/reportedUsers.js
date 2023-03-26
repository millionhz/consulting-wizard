const mongoose = require('mongoose')
const userTypes = require('../utils/userTypes')

const reportedUsersSchema = new mongoose.Schema({
    userID : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    message: {type: String},
    reportedAt: {type:Date, required: true, default: new Date().toString()},
    isResolved: {type:Boolean, default: false},
    type: {type: String, enum: Object.values(userTypes), required:true}
})

const reportedUsers = mongoose.model('reportedUsers',reportedUsersSchema)

function getReportedStudents() {
    return reportedUsers.find({type: 'client'}).exec()
}

function getReportedCounsellors(){
    return reportedUsers.find({type:'consultant'}).exec()
}

module.exports = {getReportedStudents,getReportedCounsellors}