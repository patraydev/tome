const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

let MONGODB_URI =
  process.env.PROD_MONGODB || process.env.DEV_MONGODB;

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
