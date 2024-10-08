import './App.css';
import Sidebar from './Components/Sidebar';
import { CssBaseline } from '@mui/material';
import Header from './Components/Header';
import { useMediaQuery } from '@mui/material';
import  SignIn from './SignIn';
import NewSupplier from './NewSupplier';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const isSmallScreen = useMediaQuery('(max-width: 800px)'); // Adjust width as needed

  return ( 
    <Router>
    <div className="App">
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
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path="/new-supplier" element={<NewSupplier />} />
          </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
