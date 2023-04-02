const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema(
    {
        reviewer:{
            type: String,
            required: true
        },
        respondent:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required: true
        },
        reported:{
            type: Boolean,
            required: true,
            default: false,
        },
        createdTime: { 
            type: Date, 
            required: true, 
            default: Date.now 
          }
    }
)

feedbackSchema.set('toObject', {getters: true});

const Feedback = mongoose.model('Feedback', feedbackSchema);


const addFeedback = (
    reviewer,
    reviewee,
    content,
  ) =>
    Feedback({
      reviewer,
      reviewee,
      content,
      
    })
      .save()
      ;
  

module.exports = {addFeedback}

