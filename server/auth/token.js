const crypto = require('crypto');
const keyGenerator = require('./keyGenerator');

exports.generateJWT = function(userNameFromUser, passwordFromUser) {
 if (!checkCreditenials(userNameFromUser, passwordFromUser)) {
   return false
 }

  JWTHeader = generateJWTHeader();
  JWTPlayload = generatPlayload(userNameFromUser);
  JWTSignature = generateSignature(JWTHeader, JWTPlayload);

  return JWTHeader + '.' + JWTPlayload + '.';
}

function checkCreditenials(userNameFromUser, passwordFromUser) {
  const userName = 'admin';
  const password = '00000';

  if (userNameFromUser === userName && passwordFromUser === password) {
    return true;
  } else {
    return false;
  }
}

function generateJWTHeader() {
  const header = {
    "alg": "RSA-SHA256",
    "typ": "spki"
  }

  return Buffer.from(JSON.stringify(header)).toString('base64');
}

function generatPlayload(userName) {
  const playload = {
    "name": userName
  }

  return Buffer.from(JSON.stringify(playload)).toString('base64');
}

function generateSignature(JWTHeader, JWTPlayload) {
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(JWTHeader + '.' + JWTPlayload);
  console.log(keyGenerator.getPrivateKey());
  return sign.sign(crypto.privateDecrypt(keyGenerator.getPrivateKey()),'top secret','base64');
}