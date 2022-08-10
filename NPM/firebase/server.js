const admin = require("firebase-admin");
let serAccount = require("./mp-server-7d91f-firebase-adminsdk-bk8gl-1c61202f9d.json");

admin.initializeApp({
  credential: admin.credential.cert(serAccount),
});

let target_token =
  "c_5M06jBRIGJhAhmhIzQMy:APA91bGZcK4KLVadi2lEQK7ybgeY2XyWBaceOvxvc9248vrvgWLzrQ2Gbmr0ECnqvrjGcO2bKx9nb7JvtDcXSYhpsyvQ34sLsH_Ngw0hD-AUD6Zs1pz3miwDjkyjdby4UwRg59ADb_O9";
//target_token은 푸시 메시지를 받을 디바이스의 토큰값입니다

let message = {
  data: {
    title: "테스트 데이터 발송",
    body: "데이터가 잘 가나요?",
    style: "굳굳",
  },
  token: target_token,
};

admin
  .messaging()
  .send(message)
  .then(function (response) {
    console.log("Successfully sent message: : ", response);
  })
  .catch(function (err) {
    console.log("Error Sending message!!! : ", err);
  });
