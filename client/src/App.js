import './App.css';
import Navbar from './components/Navbar';
import Identifier from './components/Identifier';
import Sustainability from './components/Sustainability';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-body">
        <Identifier />
        <Sustainability />
      </div>
    </div>
  );
}

export default App;
