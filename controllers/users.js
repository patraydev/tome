const db = require("../db/connection.js");
const User = require('../models/User.js');

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(req.body);
  } catch (error) {
     res.status(500).json({ error: error.message });
      }
};

module.exports = {
  updateUser,
};