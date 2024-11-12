import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayoutBasic from './Components/Dashboard';
import ProductList from './ProductList';
import Inventory from './Inventory';


function App() {

  return (
    <div className="App">
      <Router>
        <DashboardLayoutBasic/>
      </Router>
    </div>
  );
}

export default App;
