import './App.css';
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import Header from './Components/Header';


function App() {
  const isSmallScreen = useMediaQuery('(max-width: 800px)'); // Adjust width as needed
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        transition: 'width 0.3s'
        }}>
          <Sidebar />
        </div>
      
      <div style={{
        marginLeft: isSmallScreen? 80:240,
        transition: 'margin 0.3s'
        }}>
      <Header />
      <div style={{ padding: '20px' }}>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              Toggle Dark Mode
            </button>
          </div>

      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
