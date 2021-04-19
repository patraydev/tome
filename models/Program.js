const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema(
  {
    name: { type: String, required: [true, 'Programs must be named'] },
    location: { type: String },
    sharing_enabled: {
      type: Boolean,
      required: [true, "Sharing preference must be defined"],
      default: false,
    },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);
