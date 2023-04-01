// const express = require('express');
// const { getAllConsultants } = require('../../models/consultant');
// const userTypes = require('../../utils/userTypes');

// const router = express.Router();

// router.get('/', (req, res) => {
//   const { id, type, email } = req.user;
//   let retObj = { type, email };

//   const packageAndSend = (userObj) => {
//     retObj = { ...userObj.toObject(), ...retObj };
//     res.json(retObj);
//   };

//   const send404 = () => {
//     res.sendStatus(404);
//   };

//   if (type === userTypes.CLIENT) {
//     return getAllConsultants().then(packageAndSend).catch(send404);
//   }

//   if (type === userTypes.CONSULTANT) {
//     return getAllConsultants().then(packageAndSend).catch(send404);
//   }

//   return res.sendStatus(403);
// });

// module.exports = router;
