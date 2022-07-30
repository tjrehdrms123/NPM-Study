const express = require("express");
const { swaggerUi, specs } = require("./swagger_modules/swagger");
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
