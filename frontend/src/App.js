
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './components/Login';
import SetEvent from './components/SetEvent';
import Events from './components/Events';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  
  return (
    <div className="App">

      <Router>
        <Routes>
          
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/form" element={<SetEvent />}></Route>
          <Route path="/events" element={<Events />}></Route>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
