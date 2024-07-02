import React from "react";
import "./Header.css";
import logo from "../../assets/ss.png";

const Header = () => {
  return (
    <div className="app-header">
      <header>
        <h1>Kudos-board</h1>
      </header>
      <img src={logo} alt="codepath logo"  style={{width : "100px", height :"100px"}}/> 
    </div>
  );
};

export default Header;