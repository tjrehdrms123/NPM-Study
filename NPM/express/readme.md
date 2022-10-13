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

### 미들웨어
> express는 next로 다음 미들웨어로 넘기는데, next의 인자의 여부로 결정된다. next에 아무 인자도 넣지 않으면 다음 미들웨어를 탄다
> next 인자에 값을 넣지 않았기 때문에 최종 미들웨어가 호출되지 않는다 req로 다음 미들웨어에 값을 넘길 수 있다
```js
app.get('/',Acontroller,Bcontroller);

function Acontroller(req,res,next){
  req.data = {
    ...user
  }
  next();
}
function Bcontroller(req,res,next){
  req.data // Acontroller에서 넘겨준 data가 들어있다
  next(req.data);
}
app.use((req,res,next)=>{ 
  console.log(req.data);
});
```

### 공식 문서

> [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)

### 샘플 이미지
![express](../../images/NPM/express.png)
