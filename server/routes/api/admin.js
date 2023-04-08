const express = require('express');
const {
    getReportedConsultants
} = require('../../models/consultant')

const {
    getReportedClients 
} = require('../../models/client')

const {
    getDeactivatedUsers
} = require('../../models/user')

const router = express.Router()


router.get('/reportedConsultants',(req,res,next) => {
    getReportedConsultants().then((data) => {
      res.json(data)
    }).catch(next)
})


router.get('/reportedClients',(req,res,next) => {
    getReportedClients().then((data) => {
      res.json(data)
    }).catch(next)
})

router.get('/deactivatedUsers', (req,res,next) => {
    getDeactivatedUsers().then((data) => {
        res.json(data)
    }).catch(next)
})


module.exports = router