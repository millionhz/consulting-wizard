const express = require('express')
const router = express.Router()
const myAppointment = require('../../models/appointment')


router.get('/appointment/upcoming', async (req,res)=> {
    try{
        const upcomingAppointments = await myAppointment.find({startTime: {$gt:Date.now()}}).populate('student').populate('counsellor')
        return res.sendStatus(200).json(upcomingAppointments)
    }

    catch(error){
        console.log(error)
        res.sendStatus(500).json({message: "Failed to fetch upcoming appointments"})
    }
})


router.get('/appointment/past', async (req,res) => {
    try{
        const pastAppointments = await myAppointment.find({endTime: {$lt: Date.now()}}).populate('student').populate('counsellor')
        return res.sendStatus(200).json(pastAppointments)
    }

    catch(error){
        console.log(error)
        res.sendStatus(500).json({message: "Failed to fetch past appointments"})
    }
})

//                                                      Testing Code
// const pastAppointments = [
//     {
//       student: '6415c8d0dfeb0c778ef1047a',
//       counsellor: '6415c8d0dfeb0c778ef1047h',
//       startTime: new Date('2022-03-01T14:30:00.000Z'),
//       endTime: new Date('2022-03-01T15:30:00.000Z')
//     },
//     {
//       student: '6415c8d0dfeb0c778ef1047b',
//       counsellor: '6415c8d0dfeb0c778ef1047g',
//       startTime: new Date('2022-02-28T09:00:00.000Z'),
//       endTime: new Date('2022-02-28T10:00:00.000Z')
//     }
//   ];
  
//   // Dummy upcoming appointments
//   const upcomingAppointments = [
//     {
//       student: '6415c8d0dfeb0c778ef1047c',
//       counsellor: '6415c8d0dfeb0c778ef1047f',
//       startTime: new Date('2023-07-07T10:30:00.000Z'),
//       endTime: new Date('2023-07-07T11:30:00.000Z')
//     },
//     {
//       student: '6415c8d0dfeb0c778ef1047d',
//       counsellor: '6415c8d0dfeb0c778ef1047e',
//       startTime: new Date('2023-12-12T13:00:00.000Z'),
//       endTime: new Date('2023-12-12T14:00:00.000Z')
//     }
//   ];
  
//   // Save the appointments to the database
//   myAppointment.insertMany([...pastAppointments, ...upcomingAppointments]);

// router.get('/appointments', async (req, res) => {
//     try {
//       const pastAppointments = await myAppointment.find({ endTime: { $lt: new Date() } }).populate('student').populate('counsellor');
//       const upcomingAppointments = await myAppointment.find({ startTime: { $gt: new Date() } }).populate('student').populate('counsellor');
//       res.json({ pastAppointments, upcomingAppointments });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  
  

module.exports = router