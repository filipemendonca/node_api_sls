const app = require("./index.js");
const serverless = require("serverless-http");

module.exports.run = serverless(app);
