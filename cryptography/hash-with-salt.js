const crypto = require('crypto');

// Simple in-memory "database" to store user details (for demonstration purposes)
const usersDB = {};

// Helper function to hash a password with a salt
function hashPassword(password, salt) {
    return crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha256')
        .toString('hex'); // 64 bytes output in hex format
}

// Signup function
function signup(username, password) {
    // Check if the user already exists
    if (usersDB[username]) {
        console.log('User already exists!');
        return;
    }

    // Generate a random salt
    const salt = crypto.randomBytes(16).toString('hex');

    // Hash the password with the generated salt
    const hashedPassword = hashPassword(password, salt);

    // Store the username, hashed password, and salt in the "database"
    usersDB[username] = { salt, hashedPassword };

    console.log('User signed up successfully!');
    console.log(usersDB);
}

// Login function
function login(username, password) {
    // Check if the user exists
    if (!usersDB[username]) {
        console.log('User not found!');
        return;
    }

    // Retrieve the user's salt and hashed password from the "database"
    const { salt, hashedPassword } = usersDB[username];

    // Hash the entered password with the stored salt
    const hashedEnteredPassword = hashPassword(password, salt);

    // Compare the hashed entered password with the stored hashed password
    if (hashedEnteredPassword === hashedPassword) {
        console.log('Login successful!');
    } else {
        console.log('Invalid password!');
    }
}

// Test the functions
signup('user1', 'password123'); // Signup with username 'user1' and password 'password123'
login('user1', 'password123');  // Login with correct credentials
login('user1', 'wrongpassword'); // Login with wrong password
