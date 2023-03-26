const express = require('express');
const { filterAgeGreater } = require('../../models/consultant');

const router = express.Router();


router.post('/consultant', (req, res, next) => {
    const value = req.body;
  
    searchConsultant(value)
                    .then((data) => {
                        res.json(data);
                    })
                    .catch(next);
  });
