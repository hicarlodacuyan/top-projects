import React from "react";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/Menu.css";

const Menu = () => {
  const navRef = useRef();
  const showNavbar = () => navRef.current.classList.toggle("responsive-nav");

  return (
    <>
      <nav ref={navRef}>
        <button className="score-btn restart-btn">Restart</button>
        <button className="score-btn newgame-btn">New Game</button>
        <button 
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      
      <button 
        className="nav-btn"
        onClick={showNavbar}>
        Menu
      </button>
    </>
  );
};

export default Menu;