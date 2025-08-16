// scripts/setup-admin.js
// Run this script to generate a hashed password for your admin user
// Usage: node scripts/setup-admin.js

const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

console.log('=================================');
console.log('GRITLIY Admin Setup');
console.log('=================================\n');

rl.question('Enter admin email (default: admin@gritliy.com): ', (email) => {
  const adminEmail = email || 'admin@gritliy.com';
  
  rl.question('Enter admin password: ', (password) => {
    if (!password) {
      console.error('\nError: Password cannot be empty');
      rl.close();
      return;
    }
    
    const hashedPassword = hashPassword(password);
    
    console.log('\n=================================');
    console.log('Add these to your .env.local file:');
    console.log('=================================\n');
    console.log(`ADMIN_EMAIL=${adminEmail}`);
    console.log(`ADMIN_PASSWORD_HASH=${hashedPassword}`);
    console.log('\n# Your existing email configuration');
    console.log('EMAIL_HOST=smtp.office365.com');
    console.log('EMAIL_PORT=587');
    console.log('EMAIL_SECURE=false');
    console.log('EMAIL_USER=nadeem@gritliy.com');
    console.log('EMAIL_PASS=YOUR_EMAIL_PASSWORD_HERE');
    console.log('\n=================================');
    console.log('Setup complete!');
    console.log('=================================');
    
    rl.close();
  });
});