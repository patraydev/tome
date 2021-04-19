const { v4 } = require("uuid");

const db = require("../db/connection.js");
const User = require('../models/User.js');
const UserVerification = require("../models/UserVerification.js");

const { sendEmail } = require("../helpers/mailerDaemon.js");

db.on("error", console.error.bind(console, "MongoDB connection error:"));



//verification email hits this 
const verifyUser = async (req, res) => {
  try {
    const token = req.params.token;
    const userVerification = await UserVerification.findOne({ token });
 
    if (!userVerification)
      return res.status(400).send({ error: "Invalid verification token" });

    await User.updateOne(
      { _id: userVerification.user },
      { verified: true }
    );
    user = await User.findById(userVerification.user);

    sendEmail({
      to: user.email,
      subject: "Verified",
      text: `Congratulations, your account is now verified!`,
    });

    await UserVerification.deleteOne({
      user: user._id,
      token: token,
    });

    return res.status(201).send({ success: "Email verification achieved" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  verifyUser,
};
