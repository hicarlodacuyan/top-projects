import React from "react";
import Movie from "./Movie";

const Trending = () => {
  return (
    <div>
      <h1 className="text-xl">Trending</h1>
      <div className="flex">
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};

export default Trending;
