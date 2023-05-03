import React from 'react';

const NavbarButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default NavbarButton;


