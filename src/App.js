import './App.css';
import Sidebar from './Components/Sidebar';
import { CssBaseline } from '@mui/material';
import Header from './Components/Header';
import { useMediaQuery } from '@mui/material';


function App() {
  const isSmallScreen = useMediaQuery('(max-width: 800px)'); // Adjust width as needed

  return (
    <div className="App">
      <CssBaseline />
      <Sidebar />
      <div style={{
        marginLeft: isSmallScreen? 80:240,
        transition: 'margin 0.3s'
        }}>
      <Header />
        
      </div>
    </div>
  );
}

export default App;
