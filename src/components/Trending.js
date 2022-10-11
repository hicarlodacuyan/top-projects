import React from "react";
import Movie from "./Movie";

const Trending = ({ posterSize }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Trending</h1>
      <ul className="gap-4 overflow-x-auto w-full whitespace-nowrap snap-x">
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
        <li className="inline-block snap-start">
          <Movie posterSize={posterSize} />
        </li>
      </ul>
    </div>
  );
};

export default Trending;
