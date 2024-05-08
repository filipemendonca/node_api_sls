import mongoose from "mongoose";

export default async function MongoDbConfigurationSetup(connectionString) {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(connectionString);
  }
}
