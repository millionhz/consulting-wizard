const express = require('express');
const { addFeedback } = require('../../models/feedback');

const router = express.Router();

router.post('/feedback', (req, res, next) => {
    const { reviewer, reviewee, content } = req.body;
    addFeedback(reviewer, reviewee, content)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  });
