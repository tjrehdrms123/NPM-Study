const express = require("express");
const app = express();
const { passports } = require("../../config");
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
//Configure Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: passports.client_id,
      clientSecret: passports.client_secret,
      callbackURL: passports.callbackURL,
    },
    function (accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      console.log("accessToken : ", accessToken);
      console.log("refreshToken : ", refreshToken);
      console.log("profile : ", profile);
      return cb(profile.displayName);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    accessType: "offline",
    prompt: "consent",
  })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/secrets");
  }
);

app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("secrets");
  } else {
    res.redirect("/secrets");
  }
});

app.get("/login", (req, res) => {
  res.send("Path : /auth/google/secrets , failureRedirect");
});
