/*  
- Digital Signatures are essential when you need to prove the sender's identity, ensure data integrity, and prevent denial of sending.
- Symmetric Encryption is focused on keeping data confidential, but it doesn’t verify who sent the data.
- Hashing ensures that the data has not been changed, but it doesn’t provide identity verification or proof of sending.

*/

const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypairs");

const message = "This is a super secret message!";

const signer = createSign("rsa-sha256");
signer.update(message);

const signature = signer.sign(privateKey, "hex");

console.log(signature);

const verifier = createVerify("rsa-sha256");
verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(isVerified);
