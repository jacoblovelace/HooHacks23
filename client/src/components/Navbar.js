import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
          <div className="nav-logo">
            Logo
          </div>
          <ul>
              <li><a href='#Home'>Home</a></li>
              <li><a href="#Sustainability">Sustainability</a></li>
              <li><a href="#About">About</a></li>
            </ul>
    </div>
  );
}

export default Navbar;
