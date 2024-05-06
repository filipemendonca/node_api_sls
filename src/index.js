import express from "express";
import { configDotenv } from "dotenv";
import MongoDbConfigurationSetup from "./db/server.js";

async function startupEnvironment() {
  configDotenv();
  const app = express();
  const port = process.env.APPLICATION_PORT;

  //Middlewares
  app.use(express.json());

  //Starting route
  app.get("/", (req, res) => {
    res.send("NodeJS Serveless API with MongoDB");
  });

  //MongoDB Config
  await MongoDbConfigurationSetup(process.env.MONGODB_BASE_URL);

  //Server listening
  app.listen(port, () => console.log("Server listening to", port));
}

startupEnvironment();
