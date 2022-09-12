import React from "react";
import Menu from "./Menu";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "5px solid blue"
};

const Header = () => {
  return (
    <header
      style={headerStyle}
    >
      <h1>Title</h1>
      <Menu />
    </header>
  );
};

export default Header;