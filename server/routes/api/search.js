const express = require('express');
const { searchConsultant } = require('../../models/consultant');

const router = express.Router();


router.post('/api/search/consultant', (req, res, next) => {
    const value = req.body;
  
    searchConsultant(value)
                    .then((data) => {
                        res.json(data);
                    })
                    .catch(next);
  });
