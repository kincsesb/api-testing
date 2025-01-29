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
        setFoods(data.foods);
        setCount(data.count);
      })
      .catch((error) => console.error('Error fetching foods:', error));
  }, []);

  const updateFoodList = () => {
    const updatedFoods = newFoods.split(',').map((food) => food.trim());

    fetch('/api/foods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foodList: updatedFoods }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFoods(data.foods);
        setCount(data.count);
      })
      .catch((error) => console.error('Error updating food list:', error));
  };

  return (
    <div className="container">
      <h1>Food List</h1>
      <div className="count-box">Total Foods: {count}</div>
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
        <button onClick={updateFoodList} className="update-button">
          Update Food List
        </button>
      </div>
    </div>
  );
}

export default App;
