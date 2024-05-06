import mongoose from "mongoose";

export default async function MongoDbConfigurationSetup(connectionString) {
  await mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error(err));
}
