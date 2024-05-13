// lambdaController.js
const AWS = require("aws-sdk");

AWS.config.update({ region: "sa-east-1" });

const lambda = new AWS.Lambda();

exports.invokeLambda = (req, res) => {
  const params = {
    FunctionName: "python_lambda_handler",
  };

  lambda.invoke(params, (err, data) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error to call lambda function.", error: err });
    } else {
      const response = JSON.parse(data.Payload);
      res.status(response.statusCode).json(response.body);
    }
  });
};
