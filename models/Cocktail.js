const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cocktailSchema = new Schema(
  {
    name: { type: String, required: true },
    creator: { type: String },
    menu: {type: String},
    ingredients: { type: Array, required: true },
    bottom: { type: String },
    rinse: { type: String },
    glass: { type: String, required: true },
    ice: { type: String, required: true, default: "None" },
    method: { type: String },
    description: { type: String },
    pending: { type: Boolean },
    request_type: { type: String },
    garnish: { type: String, required: true, default: "None" },
    float: { type: String },
    top: { type: String },
    program: { type: Schema.Types.ObjectId, ref: "Program" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cocktail", cocktailSchema);
