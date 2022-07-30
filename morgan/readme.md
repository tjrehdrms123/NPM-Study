# morgan

### morgan 설명

> morgan이란? HTTP 요청 로거 미들웨어이다

### morgan 사용 방법

- 미리 정의된 형식 문자열 사용
  - combined
  - common
  - dev
  - short
  - tiny
- 미리 정의된 토큰의 형식 문자열 사용
- 사용자 지정 형식 기능 사용

### morgan 셋팅

```js
// 미리 정의된 형식 문자열 사용
app.use(morgan("dev"));

// 미리 정의된 토큰의 형식 문자열 사용
// skip 속성은 해당 "/parse-docs"에 접근했을때 로그를 출력하지 않도록 설정
app.use(
  morgan(":method :url | :status | :response-time ms | :date[iso] | ", {
    skip: (req, res) => {
      return req.originalUrl.startsWith("/parse-docs");
    },
  })
);
```

### 공식 문서

> [https://www.npmjs.com/package/morgan](https://www.npmjs.com/package/morgan)
