const express = require('express')
const router = express.Router()
const {getReportedStudents, getReportedCounsellors} = require('../../models/reportedUsers')


router.get('/students', async (req,res) => {
    try{
        const reportedStudents = await getReportedStudents();
    return res.sendStatus(200).json(reportedStudents)
    }
    catch(error){
        console.log(error)
        res.sendStatus(500).json({message: 'Failed to fetch reported Students'})
    }
})

router.get('/counsellors', async (req,res) => {
    try{
        const reportedCounsellors = await getReportedCounsellors();
    return res.sendStatus(200).json(reportedCounsellors)
    }
    catch(error){
        console.log(error)
        res.sendStatus(500).json({message: 'Failed to fetch reported Counsellors'})
    }
})


router.get('/dummydata', async (req, res) => {
    // Create some dummy reported students
    const reportedStudents = [
      { userId: 'student1', message: 'Plagiarism' , reportedAt: new Date().toString()},
      { userId: 'student2', message: 'Academic dishonesty',reportedAt: new Date().toString()},
      { userId: 'student3', message: 'Inappropriate language',reportedAt: new Date().toString()},
    ];
  
    // Create some dummy reported counsellors
    const reportedCounsellors = [
      { counselorId: 'counselor1', message: 'Misconduct',reportedAt: new Date().toString()},
      { counselorId: 'counselor2', message: 'Inappropriate behavior',reportedAt: new Date().toString()},
      { counselorId: 'counselor3', message: 'Unprofessionalism',reportedAt: new Date().toString()},
    ];
  
    // Send the dummy data to the frontend
    res.json({reportedStudents, reportedCounsellors});
  });
  


module.exports = router