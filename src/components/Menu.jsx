import React from "react";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import "../styles/Menu.css";

const Menu = (props) => {
  const navRef = useRef();
  const showNavbar = () => navRef.current.classList.toggle("responsive-nav");

  return (
    <>
      <nav ref={navRef}>
        <button className="action-btn restart-btn" onClick={props.handleRestart}>Restart</button>
        <button className="action-btn newgame-btn">New Game</button>
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