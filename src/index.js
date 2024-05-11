const express = require("express");
const { configDotenv } = require("dotenv");
const MongoDbConfigurationSetup = require("./db/server.js");
const usersController = require("./controllers/users-controller.js");
const ordersController = require("./controllers/orders-controller.js");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

//Environment variables configuration
configDotenv();

//Starting express process and get port from .env file.
const app = express();
const port = process.env.APPLICATION_PORT;

//Middlewares
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/api/users", usersController);
app.use("/api/orders", ordersController);

//Starting route
app.get("/", (req, res) => {
  res.send("NodeJS Serveless API with MongoDB");
});

//MongoDB Config
MongoDbConfigurationSetup(process.env.MONGODB_BASE_URL);

//Server listening
app.listen(port, () => console.log("Server listening to", port));

module.exports = app;
