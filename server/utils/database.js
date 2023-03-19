const mongoose = require('mongoose');

const connect = () => mongoose.connect(process.env.DB);

const updatePassword = async (userID,password) => {
    const hash = bcrypt.hashSync(password,10)
    
}
module.exports = { connect };
