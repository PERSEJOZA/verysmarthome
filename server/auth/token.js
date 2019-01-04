'use strict';
const crypto = require('crypto');
const keyGenerator = require('./keyGenerator');

exports.generateJWT = function(userNameFromUser, passwordFromUser) {
 if (!checkCreditenials(userNameFromUser, passwordFromUser)) {
   return false
 }

  let JWTHeader = generateJWTHeader();
  let JWTPlayload = generatPlayload(userNameFromUser);
  let JWTSignature = generateSignature(JWTHeader, JWTPlayload);

  const verify = crypto.createVerify('SHA256');
  verify.update(JWTHeader + '.' + JWTPlayload);
  console.log(verify.verify(keyGenerator.getPublicKey(), JWTSignature, 'base64'));

  return JWTHeader + '.' + JWTPlayload + '.' + JWTSignature;
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
    "alg": "SHA256",
    "typ": "JWT"
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
  const sign = crypto.createSign('SHA256');
  sign.update(JWTHeader + '.' + JWTPlayload);
  return sign.sign(keyGenerator.getKey(),'base64');
}