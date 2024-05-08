import express from "express";
import { configDotenv } from "dotenv";
import MongoDbConfigurationSetup from "./db/server.js";
import usersController from "./controllers/users.controller.js";
import ordersController from "./controllers/orders.controller.js";

async function startupEnvironment() {
  //Environment variables configuration
  configDotenv();

  //Starting express process and get port from .env file.
  const app = express();
  const port = process.env.APPLICATION_PORT;

  //Middlewares
  app.use(express.json());
  app.use("/api/users", usersController);
  app.use("/api/orders", ordersController);

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
