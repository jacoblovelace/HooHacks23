import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="nav">
          <div className="nav-logo">
            Logo
          </div>
          <ul>
              <button>Home</button>
              <button>Sustainability</button>
              <button>About</button>
            </ul>
    </div>
  );
}

export default Navbar;
