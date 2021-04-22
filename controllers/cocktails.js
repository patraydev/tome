const db = require("../db/connection.js");
const Cocktail = require("../models/Cocktail.js");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktail.find();
    res.json(cocktails);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCocktail = async (req, res) => {
  try {
    const { id } = req.params;
    const cocktail = await Cocktail.findById(id);
    if (cocktail) {
      return res.json(cocktail);
    }
    res.status(404).json({ message: "Cocktail not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCocktail = async (req, res) => {
  try {
    const cocktail = await new Cocktail(req.body);
    await cocktail.save();
    res.status(201).json(cocktail);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateCocktail = async (req, res) => {
  const { id } = req.params;
  try {
    await Cocktail.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(req.body);
  } catch (error) {
     res.status(500).json({ error: error.message });
      }
};

const deleteCocktail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cocktail.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Cocktail deleted");
    }
    throw new Error("Cocktail not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCocktails,
  getCocktail,
  updateCocktail,
  deleteCocktail,
  createCocktail,
};
