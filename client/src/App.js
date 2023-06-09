import { useRef } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Identifier from './components/Identifier';
import Sustainability from './components/Sustainability';
import Test from './components/Test';
import About from './components/About';

function App() {

  const identifierDiv = useRef(null);
  const sustainabilityDiv = useRef(null);
  const aboutDiv = useRef(null);

  function handleScroll(ref) {
    console.log('clicked');
    const topOfDiv = ref.current.offsetTop - 150;
    console.log(topOfDiv);
    window.scrollTo({
      top: topOfDiv,
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <Navbar handleScroll = {handleScroll} identifierDiv={identifierDiv} sustainabilityDiv={sustainabilityDiv} aboutDiv={aboutDiv} />
      <div className="main-body"> 
        <div ref = {identifierDiv}>
          <Identifier />
        </div >
        <div ref = {sustainabilityDiv}>
          <Sustainability />
        </div>
        <div ref = {aboutDiv}>
          <About />
        </div>
        <div>
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
