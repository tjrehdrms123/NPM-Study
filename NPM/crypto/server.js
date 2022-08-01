const CryptoJS = require("crypto-js");

// Hashing
const Md5 = CryptoJS.MD5(1234);

// HMAC
const HMAC = CryptoJS.HmacMD5("Message", "1234");

// PBKDF2
const salt = CryptoJS.lib.WordArray.random(128 / 8);
const PBKDF2 = CryptoJS.PBKDF2("1234", salt, {
  keySize: 128 / 32,
});

// Ciphers
const CiphersEncrypted = CryptoJS.DES.encrypt("Message", "1234");
const CiphersDecrypted = CryptoJS.DES.decrypt(CiphersEncrypted, "1234");

/* 
    Example AES
    양방향 대칭키 암호화
*/
const user = {
  id: "minsu",
  pw: 1234,
};
const privateKey = "userPK";
// 암호화
const encrypted = CryptoJS.AES.encrypt(
  JSON.stringify(user),
  privateKey
).toString();
// 복호화
const bytes = CryptoJS.AES.decrypt(encrypted, privateKey);
// 인코딩 문자열로 변경
const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log(`encrypted : ${encrypted}`);
console.log(`bytes : ${bytes}`);
console.log(`id : ${decrypted.id}, pw : ${decrypted.pw}`);

/* 
    Example HMAC
    해시 암호화
*/
const hash = CryptoJS.HmacMD5("공유 메시지", "비밀 메시지");
const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "비밀 메시지");
hmac.update("공유 메시지 1");
hmac.update("공유 메시지 2");

const hashKey = hmac.finalize();
console.log(`hash : ${hashKey}`);
