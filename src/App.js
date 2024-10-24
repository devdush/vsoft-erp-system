import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayoutBasic from './Components/Dashboard';
import ProductList from './ProductList';


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
