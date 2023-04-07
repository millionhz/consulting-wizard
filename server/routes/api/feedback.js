const express = require('express');
const { addFeedback } = require('../../models/feedback');

const router = express.Router();

router.post('/feedback', (req, res, next) => {
    const {reviewer} = req.user; 
    const { respondent, content } = req.body;
    addFeedback(reviewer, respondent, content)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  });
