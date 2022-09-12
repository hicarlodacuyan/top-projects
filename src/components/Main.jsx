import React from "react";
import Card from "./Card";

const mainStyle = {
  flex: "1", 
  border: "5px solid green"
};

const Main = () => {
  return (
    <main 
      style={mainStyle}
    >
      <Card />
    </main>
  );
};

export default Main;

