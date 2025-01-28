// server.js
const express = require('express');
const app = express();
const PORT = 5001;
const cors = require('cors');
app.use(cors());


// Mock data
const foodList = ["Pizza", "Sushi", "Burger", "Tacos", "Pasta", "Pastal De Nata"];

// API endpoint
app.get('/api/foods', (req, res) => {
  res.json(foodList);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
