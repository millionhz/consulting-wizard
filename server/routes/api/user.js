const express = require('express');
const auth = require('../../utils/firebaseAuth');
router.patch(
    '/password',
    (req, res, next) => {
      const { email } = req.user;
      req.body.email = email;
      next();
    },
    auth.authenticate('local', { session: false }),
    (req, res, next) => {
      const { user_id: userId } = req.user;
      const { newPassword } = req.body;
  
      updatePassword(userId, newPassword)
        .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
          next(err);
        });
    }
  );

module.exports = router;
