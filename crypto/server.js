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

console.log(`CryptoJS : ${CiphersDecrypted}`);
