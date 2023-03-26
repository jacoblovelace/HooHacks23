import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="nav">
          <div className="nav-logo">
            Logo
          </div>
          <ul>
              <li><Link to='/Home'>Home</Link></li>
              <button>Sustainability</button>
              <li><a href="#About">About</a></li>
            </ul>
    </div>
  );
}

export default Navbar;
