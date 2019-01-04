const { generateKeyPairSync } = require('crypto');

exports.getPrivateKey = function() {
  const keys = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'top secret'
    }
  });

  return keys.privateKey
};


