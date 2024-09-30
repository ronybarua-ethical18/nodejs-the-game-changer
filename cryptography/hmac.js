// hash based message authentication code
// The main idea is that the secret key must be kept secure at all times. If the secret key is compromised (i.e., lost or stolen), an attacker can exploit it


const crypto = require("crypto");

// Function to generate HMAC
function generateHMAC(message, secretKey) {
  return crypto.createHmac("sha256", secretKey).update(message).digest("hex");
}

// Original message and key
const originalMessage = "Hello, this is a secret message!";
const secretKey = "my_secret_key";

// Generate HMAC for the original message
const originalHMAC = generateHMAC(originalMessage, secretKey);
console.log(`Original HMAC: ${originalHMAC}`);

// Simulate an attacker changing the message
const alteredMessage = "Hello, this is a tampered message!";
const alteredHMAC = generateHMAC(alteredMessage, secretKey);
console.log(`Altered HMAC: ${alteredHMAC}`);

// Verification
if (originalHMAC !== alteredHMAC) {
  console.log("Integrity check failed: Message has been tampered with!");
} else {
  console.log("Integrity check passed: Message is intact.");
}
