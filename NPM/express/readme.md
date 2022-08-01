# express

### express 설명

> express는 node 프레임워크로 서버를 쉽게 생성할 수 있습니다

### express 설치

```js
npm init
npm i express
```

### express 셋팅

> 3000번 port로 서버를 열어주는 코드입니다

```js
const express = require("express");
const app = express();
app.listen(3000, function () {
  console.log("start! express server on port 3000");
});
```

### 공식 문서

> [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)

### 샘플 이미지
![express](../../images/NPM/express.png)