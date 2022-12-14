# crypto

### 암호화에 대해서

- 해싱이란?
  > 단방향 : 암호화 후 복호화해서 원래의 비밀번호를 알 수 없다
- 암호화란?
  > 양방향 : "키"를 통해 복호화해서 원래의 비밀번호를 알 수 있다.
  - 대칭키 : 복호화 할 때 같은 키값을 사용한다
  - 비대칭키 : 복호화 할 때 다른 키값을 사용한다
- 솔트 (Salt)
  - 솔트란? 암호화하기 전 원문에 임의의 문자를 덧붙히는 것을 말한다

### crypto에서 지원하는 암호화

- Hashing
- HMAC
- PBKDF2
- Ciphers
- Encoders

### 공식 문서

> [https://www.npmjs.com/package/crypto-js](https://www.npmjs.com/package/crypto-js)

> [https://cryptojs.gitbook.io/docs/](https://cryptojs.gitbook.io/docs/)

### 참고 문서

> [https://www.lesstif.com/ws/rest-api-hmac-87949394.html](https://www.lesstif.com/ws/rest-api-hmac-87949394.html)

> [https://defineall.tistory.com/701#crypto-js%--%EC%--%AC%EC%-A%A-%---%--AES%--%EC%--%--%EB%B-%B-%ED%--%B-%ED%--%--%---](https://defineall.tistory.com/701#crypto-js%--%EC%--%AC%EC%-A%A-%---%--AES%--%EC%--%--%EB%B-%B-%ED%--%B-%ED%--%--%---)

### 샘플 이미지
![crypto](../../images/NPM/crypto.png)