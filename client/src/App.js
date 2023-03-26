import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
      </div>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
