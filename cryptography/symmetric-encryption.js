/*
Encryption is the process of converting plaintext (readable data) into ciphertext (encoded data) using a specific algorithm and a key. 
The main goal of encryption is to protect sensitive information so that only authorized parties can read it.

There are two main types of encryption:

Symmetric Encryption - Same key is used to encrypt and decrypt like sender and receiver
Asymmetric Encryption 

A cipher is a tool used to secure data through encryption.


AES-256-CBC: Symmetric encryption algorithm using a 256-bit key and CBC mode.
Key (32 bytes): The secret used for encryption; must be 32 bytes long for AES-256.
IV (16 bytes): A random value that adds randomness to encryption, ensuring that repeated encryptions of the same message result in different ciphertexts.

'utf8': This specifies the encoding of the input data (plaintext). Since message is a UTF-8 encoded string, this tells the method to interpret the message as a UTF-8 string.
*/

const crypto = require("crypto");

// Function to encrypt a message
function encrypt(message, key) {
  const iv = crypto.randomBytes(16); // Generate a random initialization vector
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv); // Create a cipher
  let encrypted = cipher.update(message, "utf8", "hex"); // Encrypt the message
  encrypted += cipher.final("hex"); // Finalize the encryption
  return iv.toString("hex") + ":" + encrypted; // Return IV + encrypted message
}

// Function to decrypt a message
function decrypt(encryptedMessage, key) {
  const parts = encryptedMessage.split(":"); // Split the IV and encrypted message
  const iv = Buffer.from(parts.shift(), "hex"); // Get the IV
  const encryptedText = Buffer.from(parts.join(":"), "hex"); // Get the encrypted text
  const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv); // Create a decipher
  let decrypted = decipher.update(encryptedText, "hex", "utf8"); // Decrypt the message
  decrypted += decipher.final("utf8"); // Finalize the decryption
  return decrypted; // Return the decrypted message
}

// Example usage
const secretKey = crypto.randomBytes(32); // Generate a random key (32 bytes for AES-256)
const originalMessage = "Hello, this is a super secret message!"; // Original message

// Encrypt the message
const encryptedMessage = encrypt(originalMessage, secretKey);
console.log("Encrypted Message:", encryptedMessage);

// Decrypt the message
const decryptedMessage = decrypt(encryptedMessage, secretKey);
console.log("Decrypted Message:", decryptedMessage);
