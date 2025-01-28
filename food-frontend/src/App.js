import React, { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState([]);
  const [newFoods, setNewFoods] = useState('');

  useEffect(() => {
    fetch('/api/foods')
      .then((response) => response.json())
      .then((data) => setFoods(data))
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
      .then((data) => setFoods(data.foodList))
      .catch((error) => console.error('Error updating food list:', error));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Food List</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter new foods, separated by commas"
        value={newFoods}
        onChange={(e) => setNewFoods(e.target.value)}
      />
      <button onClick={updateFoodList}>Update Food List</button>
    </div>
  );
}

export default App;
