const nodemailer = require('nodemailer');
const { generateVerificationLink } = require('./firebaseAuth');

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

const myTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: myEmail,
    pass: myPassword,
  },
});

const sendVerificationEmail = (email) =>
  generateVerificationLink(email).then((link) => {
    const emailContent = {
      from: myEmail,
      to: email,
      subject: 'Verify your Consulting Wizard account',
      html: `<p>Please click on the following link to verify your email: <a href=${link}>Verify</a></p>`,
    };

    return myTransporter.sendMail(emailContent);
  });

module.exports = {
  sendVerificationEmail,
};
