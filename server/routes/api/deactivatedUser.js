const express = require('express');
const {getDeactivatedUsers} = require('../../models/deactivatedUser')
const router = express.Router()


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


router.get('/dummydata', async (req, res) => {
  // Create some dummy deactivated users
  const deactivatedUsers = [
    { type: 'client', createdTime: new Date().toString(), isDeactivated: true},
    { type: 'consultant', createdTime: new Date().toString(),isDeactivated: true},
    { type: 'consultant', createdTime: new Date().toString(),isDeactivated: true},
  ];

  res.json(deactivatedUsers)
})

module.exports = router