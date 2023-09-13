// import User from './models/User';

const router = require("express").Router();
let User = require("../../models/user/signUp.js");
var bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');


// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.SECURE),
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});


router.route('/add').post(async (req, res) => {
  const { useremail, userpassword } = req.body;
  const userverified = false;

  try {
    // Find the user email already used or not
    const user = await User.findOne({ useremail });

    if (user) {
      res.status(200).json({ message: 'Email is Already used' });
    }
    else {
      // Display an success message or redirect the user to a sign-In page

      // Hash the password before saving it
      const userhashedPassword = await bcrypt.hash(userpassword, 12);

      // Generate a unique verification token for users
      const verificationToken = crypto.randomBytes(20).toString('hex');

      // Create the verification URL
      const verificationURL = 'http://localhost:8070/u/verify?token=' + verificationToken;

      const newUser = new User({
        useremail, userpassword: userhashedPassword, userverified, verificationToken
      });

      newUser.save().then(() => {
        res.json("User Added successful")
      }).catch((err) => {
        console.log(err)
      });

      // Compose the email message
      const mailOptions = {
        from: process.env.USER,
        to: useremail,
        subject: 'Amoral Email Confirmation ',
        // text: 'Please click the following link to verify your account: '+ verificationURL,

        html: '<div style="background-color: #e7e7e7; padding: 10px 10px 50px 10px; margin: 5px; border-top-left-radius: 30px; border-bottom-right-radius: 30px;">' +
          '<p style="color:white; text-align: center; font-size: 42px; padding: 30px 0 0 0px; margin: 0px;">Welcome To</p>' +
          '<p style="color:black; text-align: center; font-size: 36px; padding: 0px; margin: 0px;">Amoral !</p><br>' +
          '<p style="color:blue; text-align: center; font-size: 22px; padding: 0px; margin: 0px;">Unleash your fashion confidence!</p><br>' +
          '<p style="font-size: 18px; text-align: center;padding: 0px 20px;">Please take a moment to confirm your email address to complete your Amoral profile.'
          + '<br>Only confirmed your email addresses will receive emails from Amoral.</p><br>' +
          '<div style = "text-align: center;"><button style = "background-color: black;border: none; border-radius: 18px; padding: 15px 25px;font-size: 16px;"'
          + '><a style="text-decoration: none; color: white; padding: 15px 32px;  border-radius: 18px;" href= http://localhost:8070/u/verify?token=' + verificationToken + '>CONFIRM EMAIL</button></div></div><br><br>'
      };

      // Send the verification email
      await transporter.sendMail(mailOptions);

    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 