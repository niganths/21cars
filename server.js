const express = require('express');
const app = express();
const path = require('path');
const dbModule = require('./dbmodule'); // Use a different name here
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const port = 2112;

// Serve static files (e.g., HTML, CSS, JavaScript) from a directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests for /login and /signup
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  dbModule.authenticateUser(email, password, res); // Use the updated name here
});

app.post('/signup', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;

  dbModule.saveUser(name, password, email, phone, res); // Use the updated name here
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
