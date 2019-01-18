var NodeRSA = require('node-rsa');
var key = new NodeRSA();
key.generateKeyPair();

exports.getKey = function () {
  return key.exportKey('pkcs1-private-pem');
}

exports.getPublicKey = function () {
  return key.exportKey('pkcs1-public-pem');
}