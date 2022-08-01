const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "SAMPLE API",
      version: "1.0.0",
      description: "API",
    },
    host: "localhost:3000",
    basePath: "/",
    servers: [{ url: "" }],
  },
  apis: ["./routes/*.js", "./swagger_modules/*"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
