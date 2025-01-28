const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

let foodList = ["Pizza", "Sushi", "Burger", "Tacos", "Pasta"];

app.use(cors());
app.use(bodyParser.json());

app.get('/api/foods', (req, res) => {
  res.json(foodList);
});

app.post('/api/foods', (req, res) => {
  const { foodList: newFoodList } = req.body;
  if (!Array.isArray(newFoodList)) {
    return res.status(400).json({ error: 'Invalid data format. An array is required.' });
  }
  foodList = newFoodList;
  res.status(200).json({ message: 'Food list updated!', foodList });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
