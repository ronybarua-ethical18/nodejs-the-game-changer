const { generateKeyPairSync } = require("crypto");

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki", //recommended by node.js docs
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", //recommended by node.js docs
    format: "pem",
    // cipher: "aes-256-cbc",
    // passphrase: "topsecret",
  },
});


module.exports = { publicKey, privateKey };
