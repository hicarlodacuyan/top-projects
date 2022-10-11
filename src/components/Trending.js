import React from "react";
import Movie from "./Movie";

const Trending = ({ posterSize }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Trending</h1>
      <div className="gap-4 overflow-x-auto w-full whitespace-nowrap">
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
      </div>
    </div>
  );
};

export default Trending;
