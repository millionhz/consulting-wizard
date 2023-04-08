const express = require('express')
const nodemailer = require("nodemailer")
const {getUserByToken, getDeactivatedUsers} = require('../../models/user');
const router = express.Router();


const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

const myTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: myEmail,
    pass: myPassword,
  },
});

//                                 A route in signUp.js which sends an email to the user as soon as he signs up
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


//                                  A route in routes/user.js which sets the boolean isVerified to true
router.get("/verify/:token", async (req, res) => {
    const {token} = req.params;
    try{
      const user = await getUserByToken(token)
      console.log(`user: ${user}`);
      if (!user) {
        return res.status(404).json({message: "User doesn't exist"});
      }
      if(user.isVerified){
        return res.status(400).json({message: "User already verified"})
      }
    
      user.isVerified = true;
      await user.save();
      res.sendStatus(200).json({message:'User Verified Successfully'})
    }
  
    catch(err){
      console.log(error)
      return res.sendStatus(500).json({message: 'Email Verification Failed'})
    }
    
});

