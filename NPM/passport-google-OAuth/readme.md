# passport-google-OAuth

### passport-google-OAuth 설명
 - passport-google-OAuth를 통해 google 로그인을 구현하기 위해 DB 연결을 해야되는 예제 밖에 없기 때문에 DB 연결 없이 구현

> 구글 로그인을 위한 패키지
> passport는 '어떤 로그인 방식을 취하냐' 를 대명사로 strategy(전략)이라고 나타냅니다.

### Example response 가비지 데이터

```js
accessToken :  ya29.A0AVA9y1tAsbXZ7bDGSSw_Lh
refreshToken :  1//0eUb134Tk-cmFCgYIARAAGA4SNwF-L9Irc2waL65a247H9l49oq9Lk9sR-I1I
profile :  {
  id: '111397',
  displayName: '석ᄃᄀ',
  name: { familyName: '석', givenName: 'ᄃᄀ' },
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/AItbvmki70zamKWPYc'
    }
  ],
  provider: 'google',
  _raw: '{\n' +
    '  "sub": "111397",\n' +
    '  "name": "석ᄃᄀ",\n' +
    '  "given_name": "ᄃᄀ",\n' +
    '  "family_name": "석",\n' +
    '  "picture": "https://lh3.googleusercontent.com/a/AItbvmki7ds96-c",\n' +
    '  "locale": "ko"\n' +
    '}',
  _json: {
    sub: '111397',
    name: '석ᄃᄀ',
    given_name: 'ᄃᄀ',
    family_name: '석',
    picture: 'https://lh3.googleusercontent.com/a/AItbvmkc',
    locale: 'ko'
  }
}
```

### 공식 문서

> [https://www.npmjs.com/package/passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20)

> [https://www.passportjs.org/packages/passport-google-oauth20/](https://www.passportjs.org/packages/passport-google-oauth20/)

### 참고 문서

> [https://honeypot.tistory.com/m/78](https://honeypot.tistory.com/m/78)

> [https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-%EA%B5%AC%EA%B8%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8-passport-google-%E2%9C%88%EF%B8%8F-%EA%B5%AC%ED%98%84](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-%EA%B5%AC%EA%B8%80-%EB%A1%9C%EA%B7%B8%EC%9D%B8-passport-google-%E2%9C%88%EF%B8%8F-%EA%B5%AC%ED%98%84)

> [https://github.com/xKeegan01/passport-google-oauth20/blob/main/app.js](https://github.com/xKeegan01/passport-google-oauth20/blob/main/app.js)


<br/>


# 발생한 에러 모음
### Error : refreshToken undefined

- [https://github.com/mstade/passport-google-oauth2/issues/5](https://github.com/mstade/passport-google-oauth2/issues/5)

accessType: "offline", prompt: "consent" 해당 값이 있는지 확인해야 됩니다

```js
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    accessType: "offline",
    prompt: "consent",
  })
);
```

### Error: Login sessions require session support. Did you forget to use `express-session` middleware?
```js
const session = require("express-session"); //세션관리용 미들웨어
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
```

### Error: failed to serialize user into session
 - https://stackoverflow.com/questions/19948816/passport-js-error-failed-to-serialize-user-into-session
```js
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
```