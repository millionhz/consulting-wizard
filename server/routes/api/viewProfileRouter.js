const express = require('express');
const {userUpdateProfile} = require ('../controllers/userControllers');
const router = express.Router();

router.route('/profile').post(userUpdateProfile); 




// router.get('/client', async (req, res, next) => {
//     const userId = req.params._id;
//     try {
//         const user = await User.findById(userId);
//         res.json(user);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//       }
// });
// module.exports = router;
