import React, { useState, createContext, useContext } from 'react';
import './App.css';

// Theme context
const ThemeContext = createContext();

// Header component
const Header = () => {
  return <header className="header">Header</header>;
};

// Navigation component
const Navigation = () => {
  return <nav className="navigation">Navigation</nav>;
};

// Main content component
const MainContent = ({ data, sortData }) => {
  return (
    <main className="main-content">
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sortData('col1')}>Column 1</th>
            <th onClick={() => sortData('col2')}>Column 2</th>
            <th onClick={() => sortData('col3')}>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

// Sidebar component
const Sidebar = () => {
  return <aside className="sidebar">Sidebar</aside>;
};

// Footer component
const Footer = () => {
  return <footer className="footer">Footer</footer>;
};

// Themed component
const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div className={`themed-component ${theme}`}></div>;
};

// App component
const App = () => {
  const [theme, setTheme] = useState('light');
  const [tableData, setTableData] = useState([
    { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3' },
    { col1: 'Data 4', col2: 'Data 5', col3: 'Data 6' },
    { col1: 'Data 7', col2: 'Data 8', col3: 'Data 9' },
    { col1: 'Data 10', col2: 'Data 11', col3: 'Data 12' },
  ]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const sortData = (column) => {
    const sortedData = [...tableData].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
    setTableData(sortedData);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <Header />
        <Navigation />
        <MainContent data={tableData} sortData={sortData} />
        <Sidebar />
        <Footer />
        <ThemedComponent />
        <button onClick={toggleTheme} className="theme-button">
          Change Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
