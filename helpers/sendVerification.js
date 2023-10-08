const { v4 } = require("uuid");
require('dotenv').config();

const db = require("../db/connection.js");
const UserVerification = require("../models/UserVerification.js");

const { sendEmail } = require("./mailerDaemon.js");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const sendUserVerification = async (user) => {
  try {
  const token = v4().toString().replace(/-/g, '');
    const verificationUrl = `${process.env.DOMAIN}/verify-confirm/${token}`
    await UserVerification.updateOne({
      user: user._id
    }, {
      user: user._id,
      token: token
    }, {
      upsert: true
    });

    sendEmail({
      to: user.email,
      subject: 'Verify your email address',
      text: `Here's your email verification link, partner: ${verificationUrl}`
    });

    return ({ success: "Verification email sent" });
    
  } catch (error) {
    return ({ error: "Verification email not sent?" });
  }
};

module.exports = {
  sendUserVerification,
};