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


router.delete('/deleteFeedback/:id', async (req,res)=>{
  try{
    const requiredFeedback = await Feedback.findById(req.params.id)
    if(!requiredFeedback){
      return res.sendStatus(404).json({message: "The desired feedback doesn't exist"})
    }
    await requiredFeedback.remove()
    res.json({message: "Feedback deleted successfully"})
  }

  catch(error){
    console.log(error)
    res.sendStatus(500).json({message: "Server error"})
  }
  
})



module.exports = router



