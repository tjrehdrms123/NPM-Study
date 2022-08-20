const express = require("express");
const app = express();
const { passports } = require("../config");
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
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

passport.use(
  new KakaoStrategy(
    {
      clientID: passports.kakao.rest_api_key,
      callbackURL: passports.kakao.callbackURL,
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

app.get(
  "/auth/kakao",
  passport.authenticate("kakao", {
    accessType: "offline",
    prompt: "consent",
  })
);

app.get(
  "/auth/kakao/secrets",
  //? 그리고 passport 로그인 전략에 의해 kakaoStrategy로 가서 카카오계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다.
  passport.authenticate("kakao", {
    failureRedirect: "/login", // kakaoStrategy에서 실패한다면 실행
  }),
  // kakaoStrategy에서 성공한다면 콜백 실행
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
