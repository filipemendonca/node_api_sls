const { Router } = require("express");
const router = Router();
const lambdaController = require("../controllers/lambda-controller.js");

router.post("/", lambdaController.invokeLambda);

module.exports = router;
