const db = require("../db/connection.js");

const User = require("../models/User.js");
// const Cocktail = require('../models/Cocktail.js');

const getLibrary = async (req, res) => {
  try {
    console.log(req.body);
    const { userID } = req.body;
    console.log("controller userid",userID);
    const user = await (await User.findOne({ _id: userID }))
      .populate("library")
      .execPopulate();
    console.log("controller user", user);
    res.json(user.library); 
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const addToLibrary = async (req, res) => {
  try {
    const { userID, cocktailID } = req.body;
    const user = await User.findOne({ _id: userID });
    user.library.push(cocktailID);
    await user.save();
    res.json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const removeFromLibrary = async (req, res) => {
  try {
    const { userID, cocktailID } = req.body;
    const user = await User.findOne({ _id: userID });
    index = user.library.indexOf(cocktailID);
    user.library.splice(index, 1);
    await user.save();
    res.json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getLibrary,
  addToLibrary,
  removeFromLibrary
};
