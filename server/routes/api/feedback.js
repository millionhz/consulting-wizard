const express = require('express');
const Feedback = require('../../models/feedback');
const router = express.Router()



router.get('/',async (req,res)=> {
    try{
        const allFeedbacks = await Feedback.find({type: 'reported'})
        res.json(allFeedbacks)
    }
    catch(err){
        res.sendStatus(500).json({message: err.message})
    }
})


router.get('/dummy-feedbacks', (req, res) => {
    const dummyFeedbacks = [
      { id: 1, title: 'Great app', description: 'This app is amazing!',type: 'reported',rating: 3, },
      { id: 2, title: 'Could be better', description: 'Some features are missing.',rating: 4 },
      { id: 3, title: 'Buggy', description: 'I encountered some bugs while using this app.',rating:1}
    ];
    res.json(dummyFeedbacks);
  });



module.exports = router



