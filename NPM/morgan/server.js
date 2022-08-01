const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(
  morgan(":method :url | :status | :response-time ms | :date[iso] | ", {
    skip: (req, res) => {
      return req.originalUrl.startsWith("/parse");
    },
  })
);
app.get("/", (req, res) => {
  res.send("hi");
});
app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
