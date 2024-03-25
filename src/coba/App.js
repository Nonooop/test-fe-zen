import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Michael Johnson', age: 40, city: 'Chicago' },
    { name: 'Emily Davis', age: 35, city: 'Houston' }
  ]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <header className="header">Header</header>
      <nav className="nav">Navigation</nav>
      <main className="main">
        <table id="data-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Usia</th>
              <th>Kota</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <aside className="sidebar">Sidebar</aside>
      <footer className="footer">Footer</footer>
      <button onClick={toggleTheme} className="theme-button">Ubah Tema</button>
    </div>
  );
}

export default App;
