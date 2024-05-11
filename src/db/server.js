// import mongoose from "mongoose";
const mongoose = require("mongoose");

async function MongoDbConfigurationSetup(connectionString) {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(connectionString);
  }
}

module.exports = MongoDbConfigurationSetup;
