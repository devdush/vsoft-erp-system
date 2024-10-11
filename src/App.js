import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DashboardLayoutBasic from './Components/Dashboard';


function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <DashboardLayoutBasic/>
    </BrowserRouter>
    </div>
  );
}

export default App;
