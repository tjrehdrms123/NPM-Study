const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const user = {};
  next({
    ...user,
    id: "donggeun",
  });
});

app.use((req, res, next) => {
  res.send("MiddleWare A");
});

app.use((user, req, res, next) => {
  console.log(`user id : ${user.id}`);
  res.send("MiddleWare B");
});

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
