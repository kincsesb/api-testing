import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [newFoods, setNewFoods] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api/foods')
      .then((response) => response.json())
      .then((data) => {
        let filteredFoods = data.foods.slice(0, Math.min(data.count, 15));
        
        
        filteredFoods = filteredFoods.map(food => {
          if (food.name === "Sushi") {
            return {
              name: "Nyers hal és rizs",
              image: "http://localhost:5001/images/bad-food.jpg"
            };
          }
          return food;
        });

        setFoods(filteredFoods);
        setCount(data.count);
      })
      .catch((error) => console.error('Error fetching foods:', error));
  }, []);

  /*
  This code set the correct data and trigger the backend error. 
  You just need to remove the comment signs.

  If you want to this code works correctly use the commented section in backend.
  const updateFoodList = () => {
    const updatedFoods = newFoods.split(',').map((food) => food.trim());

    fetch('/api/foods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foodList: updatedFoods }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend response:", data);
        setFoods(data.foods || foods);
        setCount(data.count || count);
      })
      .catch((error) => console.error('Error updating food list:', error));
  };
  */

  const updateFoodList = () => {
    console.log('Yes, this is a frontend bug! The button is not triggering the request.');
};

  return (
    <div className="container">
      <h1>Food List</h1>
      <div className="count-box">Total Foods: {count > 15 ? "15" : count}</div>
      <ul className="food-list">
        {foods.map((food, index) => (
          <li key={index} className="food-item">
            <img src={food.image} alt={food.name} className="food-image" />
            <span className="food-name">{food.name}</span>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter new foods, separated by commas"
          value={newFoods}
          onChange={(e) => setNewFoods(e.target.value)}
          className="food-input"
        />
        <button className="update-button" onClick={updateFoodList}>
          Update Food List
        </button>
      </div>
    </div>
  );
}

export default App;
