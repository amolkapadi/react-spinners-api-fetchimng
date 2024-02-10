import React, { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import './App.css';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUserData(data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader-container">
          <Blocks type="Blocks" color="#4fa94d" height={80} width={80} visible={loading} />
        </div>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>User Data</h1>
          <div className="user-container">
            {userData.map((user) => (
              <div key={user.id} className="user-card">
                <h3>{user.name}</h3>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
