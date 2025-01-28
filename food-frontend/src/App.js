import React, { useEffect, useState } from 'react';

function App() {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch food list from the API
    fetch('/api/foods')
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFoods(data);
      })
      .catch((err) => {
        console.error('Error fetching foods:', err);
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Food List</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {foods.length > 0 ? (
          foods.map((food, index) => <li key={index}>{food}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
