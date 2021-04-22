const mongoose = require("mongoose");
require('dotenv').config();

let MONGODB_URI =
  process.env.PROD_MONGODB || process.env.LOCAL_MONGODB;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch((e) => console.error("Connection error =(", e.message));

module.exports = mongoose.connection;
