const express = require("express");
const app = express();
const { passports } = require("../config");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");

app.use(
  session({
    httpOnly: true, //자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
    secure: true, //https 환경에서만 session 정보를 주고받도록처리
    secret: "secret key", //암호화하는 데 쓰일 키
    resave: false, //세션을 언제나 저장할지 설정함
    saveUninitialized: true, //세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
    cookie: {
      //세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
      httpOnly: true,
      Secure: true,
    },
  })
);

// 02. 요청 인증 : Google에서 인증 작업 후 회원 정보인(profile)을 매개변수로 받아옴
passport.use(
  new GoogleStrategy(
    {
      clientID: passports.client_id,
      clientSecret: passports.client_secret,
      callbackURL: passports.callbackURL,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("accessToken : ", accessToken);
      console.log("refreshToken : ", refreshToken);
      console.log("profile : ", profile);
      console.log("profile id : ", profile.id);
      return cb(null, {
        user_id: profile.name,
        provider: profile.provider,
      });
    }
  )
);

// serializeUser, deserializeUser
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// 01. 정보 요청 라우터
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    accessType: "offline",
    prompt: "consent",
  })
);

// 03. 요청 인증 : 정보 요청이 완료되었을 때 인증이 완료, 미완료를 분기
app.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
