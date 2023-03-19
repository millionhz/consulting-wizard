import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const userUpdateProfile = asyncHandler(async (req, res) =>{
    const userId = req.body._id;
    if (userID){
        userID.displayName = req.body.displayName || userId.displayName
        userId.email = req.body.email || userId.email
        const updatedUser = await userId.save();
        res.json({
            _id:updatedUser._id,
            displayName: updatedUser.displayName,
            email: updatedUser.email
        })
    
    }
    else {
        res.status(404)
        throw new Error('user not found')
    }

    
} );

module.exports = {userUpdateProfile};