import './Navbar.css';
import logo from '../logo.png'; 

function Navbar(props) {

  return (
    <div className="nav">
      <img className="logo" src={logo} alt="logo"></img>
      <ul>
        <li><button onClick = {() => props.handleScroll(props.identifierDiv)}>Identifier</button></li>
        <li><button onClick = {() => props.handleScroll(props.sustainabilityDiv)}>Sustainability</button></li>
        <li><button onClick = {() => props.handleScroll(props.aboutDiv)}>About</button></li>
      </ul>

    </div>
  );
}

export default Navbar;
