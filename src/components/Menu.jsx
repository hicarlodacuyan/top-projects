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
        <p className="menu-note">Note: New Game resets both Score and High score while Restart only reset Score.</p>
        <button className="action-btn restart-btn" onClick={props.handleRestart}>Restart</button>
        <button className="action-btn newgame-btn" onClick={props.handleNewGame}>New Game</button>
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