# passport-google-OAuth

### passport-google-OAuth 설명

> 구글 로그인을 위한 패키지
> passport는 '어떤 로그인 방식을 취하냐' 를 대명사로 strategy(전략)이라고 나타냅니다.

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

### Example response

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

### 샘플 이미지
