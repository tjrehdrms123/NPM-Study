# swagger

### swagger 셋팅

> [swagger-ui-express](https://github.com/tjrehdrms123/Node-Express-Study/blob/main/swagger/readme-swaggerUi.md), [swagger-jsdoc](https://github.com/tjrehdrms123/Node-Express-Study/blob/main/swagger/readme-swagger-jsdoc.md)를 먼저 설치한다 그 후 아래의 코드를 셋팅한다

### server.js

```js
const { swaggerUi, specs } = require("./swagger_modules/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
```

### swagger_modules/swagger.js

```js
const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "API",
      version: "1.0.0",
      description: "API",
    },
    host: "hostname",
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
```

### definitions.yml

```js
## Request
definitions:
  User:
    type: "object"
    properties:
      admin_id:
        type: "string"
        example: "아이디"
      password:
        type: "string"
        example: "비밀번호"
```
