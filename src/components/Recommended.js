import React from "react";
import Movie from "./Movie";

const Recommended = ({ posterSize }) => {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <h1 className="text-2xl">Recommended</h1>
      <div className="grid xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
        <Movie posterSize={posterSize} />
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

export default Recommended;
