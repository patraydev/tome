const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passwordResetSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, 'Reset attempts must be connected to a valid user'],
    },
    token: { type: String, required: [true, 'Reset attempts must have a valid token'] },
  },
  { timestamps: true }
);

passwordResetSchema.index({ 'updatedAt': 1 }, { expireAfterSeconds: 300 }),

module.exports = mongoose.model("PasswordReset", passwordResetSchema);
