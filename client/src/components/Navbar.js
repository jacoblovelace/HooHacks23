import './Navbar.css';
import logo from '../logo.png'; 

function Navbar(props) {
  return (
    <div className="nav">
      <ul>
        <li><button onClick = {() => props.handleScroll(props.identifierDiv)}>Identifier</button></li>
        <li><button onClick = {() => props.handleScroll(props.sustainabilityDiv)}>Sustainability</button></li>
        <li><button>About</button></li>
      </ul>
    
      <img className="logo" src={logo} alt="logo"></img>
    </div>
  );
}

export default Navbar;
