const {createHash}= require('crypto')


// function hash(input){
//     //md5 algorithm deprecated by nist
//     return createHash('sha256').update(input).digest('base64')
// }

// const password = 'hi-bro'
// const hash1 = hash(password)
// const hash2 = hash(password)

// console.log(hash1 === hash2)


// Function to compute SHA-256 hash
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
