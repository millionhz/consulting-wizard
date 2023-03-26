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

router.get('/deactivated', async (req,res)=> {
  try{
    const allDeactivatedRequests = await getDeactivatedUsers()
    return res.sendStatus(200).json(allDeactivatedRequests)
  }

  catch(error){
    console.log(error)
    res.sendStatus(500).json({message: 'Failed to fetch deactivated requests'})
  }
  

})

module.exports = router