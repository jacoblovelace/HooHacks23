import './Navbar.css';

function Navbar(props) {
  return (
    <div className="nav">
          <div className="nav-logo">
            Logo
          </div>
          <ul>
              <li><button onClick = {() => props.handleScroll(props.identifierDiv)}>Identifier</button></li>
              <li><button onClick = {() => props.handleScroll(props.sustainabilityDiv)}>Sustainability</button></li>
              <li><button>About</button></li>
            </ul>
    </div>
  );
}

export default Navbar;
