import React from 'react';
import NavbarButton from './navbarbutton.js';

const Navbar = () => {
  const handleButton1Click = () => {
    console.log('Button 1 clicked');
  }

  const handleButton2Click = () => {
    console.log('Button 2 clicked');
  }

  const handleButton3Click = () => {
    console.log('Button 3 clicked');
  }

  const handleButton4Click = () => {
    console.log('Button 4 clicked');
  }

  return (
    <nav>
      <ul>
        <li><NavbarButton text="Button 1" onClick={handleButton1Click} />Home</li>
        <li><NavbarButton text="Button 2" onClick={handleButton2Click} />About</li>
        <li><NavbarButton text="Button 3" onClick={handleButton3Click} />Contact</li>
        <li><NavbarButton text="Button 4" onClick={handleButton4Click} />Learn More</li>
      </ul>
    </nav>
  );
}


export default Navbar;


// Create a navbar (Easier)
// make a Navbar component
// make a NavbarButton component
// import NavbarButton into Navbar
// Make 4 NavbarButton in Navbar
// import Navbar into App.js and make 1 Navbar


