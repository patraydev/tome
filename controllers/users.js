const db = require("../db/connection.js");
const User = require("../models/User.js");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { foregroundColor, backgroundColor } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { foregroundColor: foregroundColor, backgroundColor: backgroundColor },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateUser,
};
