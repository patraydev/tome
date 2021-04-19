const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verifySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, 'Verification attempts must be connected to a valid user'],
    },
    token: { type: String, required: [true, 'Verification attempts must have a valid token'] },
  },
  { timestamps: true }
);

// passwordResetSchema.index({ 'updatedAt': 1 }, { expireAfterSeconds: 300 }),

module.exports = mongoose.model("UserVerification", verifySchema);