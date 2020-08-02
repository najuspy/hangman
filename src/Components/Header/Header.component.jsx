import React from "react";

import logo from "../../assests/hangman.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="HANGMAN" />
      </div>
    </header>
  );
};

export default Header;
