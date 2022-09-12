import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "5px solid blue"
      }}
    >
      <h1>Title</h1>
      <Menu />
    </header>
  );
};

export default Header;