var crypto = require('crypto');
var keyGenerator = require('./keyGenerator');

exports.generateJWT = function(userNameFromUser, passwordFromUser) {
 if (!checkCreditenials(userNameFromUser, passwordFromUser)) {
   return false;
 }

  var JWTHeader = generateJWTHeader();
  var JWTPlayload = generatPlayload(userNameFromUser);
  var JWTSignature = generateSignature(JWTHeader, JWTPlayload);

  return JWTHeader + '.' + JWTPlayload + '.' + JWTSignature;
};

exports.verifyJWT = function (token) {
  var verify = crypto.createVerify('SHA256');
  toekn = token.split(".");
  verify.update(tolen[0] + '.' + token[1]);
  return verify.verify(keyGenerator.getPublicKey(), token[2], 'base64');
};

function checkCreditenials(userNameFromUser, passwordFromUser) {
  var userName = 'admin';
  var password = '00000';

  if (userNameFromUser === userName && passwordFromUser === password) {
    return true;
  } else {
    return false;
  }
}

function generateJWTHeader() {
  var header = {"alg": "SHA256", "typ": "JWT"};

  return Buffer.from(JSON.stringify(header)).toString('base64');
}

function generatPlayload(userName) {
  var playload = {"name": userName};

  return Buffer.from(JSON.stringify(playload)).toString('base64');
}

function generateSignature(JWTHeader, JWTPlayload) {
  var sign = crypto.createSign('SHA256');
  sign.update(JWTHeader + '.' + JWTPlayload);
  return sign.sign(keyGenerator.getKey(),'base64');
}