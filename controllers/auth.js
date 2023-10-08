const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('../models/User.js');
const db = require('../db/connection.js');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const signUp = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (await User.find({ email: email })) {
        return res.status(302).json({ error: "Email is already registered" })
      }

      const user = new User({
        email,
        password,
      });

      await user.save();

      const payload = {
        userID: user._id,
      };

      const token = jwt.sign(payload, process.env.TOKEN_KEY);
      return res.status(201).json({ user, token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
}

const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
        if (await bcrypt.compare(password, user.password)) {
          const payload = {
            userID: user._id,
          };

          const token = jwt.sign(payload, process.env.TOKEN_KEY);
          return res.status(201).json({ user, token });
        } else {
          return res.status(401).json({ error: 'Email or Password Invalid' });
        }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
}

const verify =  async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, process.env.TOKEN_KEY);
        if(payload) {
          const user = await User.findById(payload.userID);
          return res.json(user);
        }
    } catch (e) {
      return res.status(401).send('Not Authorized');
    }
}


module.exports = {
    signUp,
    signIn,
    verify,
}