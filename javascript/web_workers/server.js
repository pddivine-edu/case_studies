const express = require('express');
const app = express();

// Serve static
app.use(express.static(__dirname + '/client'));

// Establish server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000 to test.');
});