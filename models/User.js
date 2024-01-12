const bcrypt = require('bcrypt');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const {sendUserVerification} = require('../helpers/sendVerification.js');

const userSchema = new Schema(
  {
    username: { type: String },
    foregroundColor: { type: String, default: "#fadde1" },
    backgroundColor: { type: String, default: "#3c3c3c" },
    seal: {type: Number, default: 1},
    email: { type: String, required: [true, 'Users must have an email'] },
    is_admin: {
      type: Boolean,
      required: [true, 'Admin privileges must be defined.'],
      default: false
    },
    password: {
      type: String,
      required: [true, 'You must provide a password']
    },
    program: [{ type: Schema.Types.ObjectId, ref: "Program" }],
    library: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
    verified: {
      type: Boolean,
      required: [true, 'Verification status required'],
      default: false
    }
  },
  { timestamps: true }
);


//reset and verify pre-save hooks
userSchema.pre('save', async function (next) {
  //if pw is new or changed, salt and hash
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT_ROUNDS));
  };

  //BROKE after moving to new dev environment
  //if email is new or changed, send verification email
  // if (this.isNew || this.isModified('email')) {
  //   await sendUserVerification(this);
  //   next();
  // };
});

module.exports = mongoose.model("User", userSchema);