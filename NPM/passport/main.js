var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
app.use(helmet());
var session = require("express-session");
var FileStore = require("session-file-store")(session);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(
  session({
    secret: "asadlfkj!@#!@#dfgasdg",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);

// passport는 express-session을 내부 적으로 사용하기 때문에 express-session 미들웨어 다음에 사용해야된다
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var authData = {
  email: "wwe5455@naver.com",
  password: "1",
  nickname: "egoing",
};

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  // 첫 로그인에 성공했다면 LocalStrategy의 첫번째 인자를 받음
  done(null, user.email);
});

passport.deserializeUser(function (id, done) {
  // 첫 로그인에 성공했다면 다음에 페이지 요청에는 deserializeUser를 사용하게 되고, user를 조회해서 반환해준다
  console.log("d", id);
  done(null, authData);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "pwd",
    },
    function (username, password, done) {
      // 인증 검사 코드, username, password로 꼭 넘겨줘야되서 필드에서 지정해줌
      if (username === authData.email) {
        if (password === authData.password) {
          done(null, authData);
        } else {
          done(null, false, {
            message: "Incorrect password",
          });
        }
      } else {
        done(null, false, {
          message: "Incorrect username",
        });
      }
    }
  )
);

app.post(
  "/auth/login_process",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  })
);

app.get("*", function (request, response, next) {
  fs.readdir("./data", function (error, filelist) {
    request.list = filelist;
    next();
  });
});

var indexRouter = require("./routes/index");
var topicRouter = require("./routes/topic");
var authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/topic", topicRouter);
app.use("/auth", authRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3300, function () {
  console.log("Example app listening on port 3300!");
});
