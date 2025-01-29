const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5001;

let foodList = [
  "Pizza", "Sushi", "Burger", "Tacos", "Pasta", "Salad", "Steak", "Falafel",
  "Ice Cream", "Ramen", "Hot Dog", "Sandwich", "Curry", "Donuts", "BBQ Ribs",
  "Paella", "Dumplings", "Lasagna", "Cheesecake", "Pancakes"
];

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/api/foods', (req, res) => {
  const foodData = foodList.map(food => ({
    name: food,
    image: `http://localhost:${PORT}/images/image.jpg`
  }));

  res.json({
    count: foodList.length,
    foods: foodData
  });
});

app.post('/api/foods', (req, res) => {
  console.log('Received new food list, but this API has a secret bug!');
  res.status(200).json({ message: 'Update request received!' });
});

/*
app.post('/api/foods', (req, res) => {
    const { foodList: newFoodList } = req.body;
    if (!Array.isArray(newFoodList)) {
      return res.status(400).json({ error: 'Invalid data format. An array is required.' });
    }
  
    foodList = newFoodList;
  
    const foodData = foodList.map(food => ({
      name: food,
      image: `http://localhost:${PORT}/images/image.jpg`
    }));
  
    res.status(200).json({
      message: 'Food list updated!',
      count: foodList.length,
      foods: foodData
    });
  });
*/

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
