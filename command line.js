// Run your app with arguments
node app.js --port=8080 --api-key=your_api_key

// In your Node.js code
const port = process.argv[2].split('=')[1] || 3000; // Parse port from argument
const apiKey = process.argv[3].split('=')[1]; // Parse API key from argument
