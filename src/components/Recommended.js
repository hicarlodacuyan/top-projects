import React from "react";
import Movie from "./Movie";

const Recommended = () => {
  return (
    <div className="flex-1">
      <h1 className="text-xl">Recommended</h1>
      <div className="grid grid-cols-4">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};

export default Recommended;
