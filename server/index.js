const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const feedbackRoute = require('./routes/api/feedback')
const userRoute = require('./routes/api/user')
const deactivatedRoute = require('./routes/api/deactivatedUser')
const reportedRoute = require('./routes/api/reportedUsers')
const appointmentRoute = require('./routes/api/appointment')
const myDatabase = process.env.DB

const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(myDatabase,{useNewUrlParser: true, useUnifiedTopology: true})
const database = mongoose.connection
database.on("error",console.error.bind(console, "database connection error: "))



app.use('/api/feedback', feedbackRoute);
app.use('/api/user',userRoute);
app.use('/api/deactivatedUser',deactivatedRoute)
app.use('/api/reportedUsers',reportedRoute)
app.use('/api/appointment',appointmentRoute)


app.listen(3000,()=> {
    console.log("Server is listening at port 3000")
})