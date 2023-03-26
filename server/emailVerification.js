const express = require('express')
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Bcrypt = require("bcrypt")
const path = require('path');
require("dotenv").config();
//const User = require('./models/user');

const app = express()

app.use(express.static('public'))

const myEmail = process.env.EMAIL
const myPassword = process.env.PASSWORD


app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/ConsultingWizards',{useNewUrlParser: true, useUnifiedTopology: true})
const database = mongoose.connection
database.on("error",console.error.bind(console, "database connection error: "))

const schema = new mongoose.Schema({
    email: String,
    isVerified: Boolean,
    id: String
})




const User = mongoose.model('User',schema)

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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});


app.get('/verify/:id',async (req,res)=>{
    const id = req.params.id
    console.log(`id: ${id}`)
    const user = await User.findOne({id})
    console.log(`user: ${user}`)
    if(!user){
        return res.status(404).send('Invalid user request')
    }

    user.isVerified = true
    await user.save()

    res.redirect('/success')

})

app.post('/signup',async (req,res)=>{
    
    Bcrypt.hash(req.body.password, 10, async (error,hashed_password)=>{
        if(error){
            throw error;
            res.sendStatus(404)
        }
        else{
            const userEmail = req.body.email
            const userName = req.body.name


        const userId = Math.random().toString(20).substring(1,20) + Math.random().toString(20).substring(1,20)

        const user = new User({
            userName,
            userEmail,
            isVerified:false,
            userId
        })

        try {
            await User.create(user);
            // ...
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
        

        await user.save()

        const emailContent = {
            from: myEmail,
            to: userEmail,
            subject: 'User Email Verification',
            html: `<p>Please click on the following link to verify your email: <a href="https://localhost:3000/verify/:${userId}">Verify</a></p>`
        }

    await myTransporter.sendMail(emailContent)
        }
        
    

})
})

console.log("Hogya h connect")

app.listen(3000, () => {
    console.log("Server is listening at port 3000")
})

