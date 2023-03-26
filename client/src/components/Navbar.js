import './Navbar.css';

function Navbar(props) {
  return (
    <div className="nav">
          <div className="nav-logo">
            Logo
          </div>
          <ul>
              <button onClick = {() => props.handleScroll(props.identiferDiv)}>Identifier</button>
              <button onClick = {() => props.handleScroll(props.sustainabilityDiv)}>Sustainability</button>
              <button>About</button>
            </ul>
    </div>
  );
}

export default Navbar;
