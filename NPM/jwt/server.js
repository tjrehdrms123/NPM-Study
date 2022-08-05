const { sign, verify } = require("jsonwebtoken");
const SALT = "This is secret key";
const user = {
  name: "tjrehdrms123",
  type: "public",
};

const token = () => {
  return sign(user, SALT);
};
const verifyToken = () => {
  return verify(token(), SALT);
};

console.log(`token : ${token()}`);
console.log(`verifyToken name : ${verifyToken().name}`);
