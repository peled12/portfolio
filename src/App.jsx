import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  const [darkMode, setdarkMode] = useState(() => {
    // check is dark mode is active
    const stored = localStorage.getItem('dark-mode');
    return stored ? true : false;
  });

  function changeTheme() {
    // toggle dark mode in localStorage
    if (darkMode) localStorage.removeItem('dark-mode');
    // remove dark mode from localStorage
    else localStorage.setItem('dark-mode', true); // save dark mode in localStorage

    setdarkMode((prev) => !prev); // toggle dark mode in state
  }

  return (
    <AppContext.Provider value={{ darkMode, changeTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
