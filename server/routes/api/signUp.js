const express = require('express');
const { addUser } = require('../../models/user');

const router = express.Router();
require('dotenv').config()

const myEmail = process.env.EMAIL
const myPassword = process.env.PASSWORD


const myTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port:587,
  secure:false,
  requireTLS:true,
  auth: {
      user: myEmail,
      pass: myPassword
  }
})


router.post('/client', (req, res, next) => {
  const { email, password, displayName } = req.body;
  addUser(email, password, displayName)
    .then((data) => {
      const emailContent = {
        from: myEmail,
        to: email,
        subject: 'User Email Verification',
        html: `<p>Please click on the following link to verify your email: <a href="https://localhost:3000/verify/:${data._id}">Verify</a></p>`
    }

      myTransporter.sendMail(emailContent)
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
