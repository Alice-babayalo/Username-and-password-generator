// Import necessary modules
const bcrypt = require('bcrypt');

// Function to generate a random string
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Function to generate a username and password
const generateUsernameAndPassword = async () => {
  try {
    // Generate a random username (e.g., using the first 5 characters of the user's email)
    const username = generateRandomString(5);

    // Generate a random password
    const password = generateRandomString(8);

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    return { username, password, hashedPassword };
  } catch (error) {
    throw new Error('Error generating username and password');
  }
};

// Example usage
generateUsernameAndPassword()
  .then(({ username, password, hashedPassword }) => {
    console.log('Generated username:', username);
    console.log('Generated password:', password);
    console.log('Hashed password:', hashedPassword);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
