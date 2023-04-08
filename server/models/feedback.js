const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  respondent: {
    
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consultant',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  reported: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

feedbackSchema.set('toObject', { getters: true });

const Feedback = mongoose.model('Feedback', feedbackSchema);

const addFeedback = (reviewer, respondent, content) =>
  Feedback({
    reviewer,
    respondent,
    content,
  }).save();
const reportFeedback = (reportedPostId) =>
  Feedback.updateOne(reportedPostId, { $set: { reported: true } }).exec();

const getFeedbackbyConsultant = (consultantName) =>
  Feedback.find(consultantName).exec();

const viewReportedFeedback = () => 
  Feedback.find({reported: true}).exec();

module.exports = { addFeedback, reportFeedback, getFeedbackbyConsultant, viewReportedFeedback };
