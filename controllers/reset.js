const { v4 } = require('uuid');

const db = require('../db/connection.js');
const User = require('../models/User.js');
const PasswordReset = require('../models/PasswordReset.js')

const { sendEmail } = require('../helpers/mailerDaemon.js');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const sendReset = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      
      if (!user) return res.status(400).json({ error: 'User not found' });
      
      const token = v4().toString().replace(/-/g, '')
      PasswordReset.updateOne({
        user: user._id
      }, {
        user: user._id,
        token: token
      }, {
        upsert: true
      })
        .then(updateResponse => {
          const resetLink = `${process.env.DOMAIN}/reset-confirm/${token}`

          sendEmail({
            to: user.email, 
            subject: 'TOME Password Reset',
            text: `Hi, here's your password reset link: ${resetLink}. 
            If you did not request this link, ignore it.`
          })

          return res.status(201).json({success: 'Reset link sent'})
        });

    } catch (error) {
      return res.status(500).json({error: error.message })
    }
}

const confirmReset = async (req, res) => {
  try {    
      const token = req.params.token;
      const passwordReset = await PasswordReset.findOne({ token });
      if (!passwordReset) return res.status(400).json({ error: 'Invalid reset token' });

      const user = await User.findOne({ _id: passwordReset.user });
      user.password = req.body.password;

      user.save().then(async savedUser => {
        /* Delete password reset document in collection */
        await PasswordReset.deleteOne({ _id: passwordReset._id });

        sendEmail({
          to: user.email, 
          subject: 'Password Reset Successful',
          text: `Congratulations! Your password reset was successful.`
        })
        
        return res.status(201).json({ success: 'Password reset achieved' });
      });

    } catch (error) {
    return res.status(500).json({error: error.message })
    }
}

module.exports = {
  sendReset,
  confirmReset,
};
