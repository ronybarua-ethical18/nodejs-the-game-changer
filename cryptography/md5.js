const crypto = require('crypto');

// Function to compute MD5 hash
function computeMD5(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

// Known MD5 hash of a password
const knownPasswordHash = '482c811da5d5b4bc6d497ffa98491e38'; // MD5 of "password123"
const possiblePasswords = ['hello', 'world', 'password', '123456', 'abc123', 'password123'];

// Brute-force attempt
let foundPassword = null;
for (let password of possiblePasswords) {
    if (computeMD5(password) === knownPasswordHash) {
        foundPassword = password;
        break;
    }
}

if (foundPassword) {
    console.log(`Brute-force succeeded! The password is: ${foundPassword}`);
} else {
    console.log('Brute-force failed! Password not found.');
}

function computeSHA256(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

// Test inputs
const input = 'Hello, World!';

// Compute hashes
const md5Hash = computeMD5(input);
const sha256Hash = computeSHA256(input);

// Log results
console.log('Input:', input);
console.log('MD5 Hash:', md5Hash);
console.log('SHA-256 Hash:', sha256Hash);

