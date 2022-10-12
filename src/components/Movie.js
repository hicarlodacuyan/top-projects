import React from "react";
import { MdLocalMovies } from "react-icons/md";

const Movie = ({ posterSize }) => {
  return (
    <>
      {posterSize === "300x150" ? (
        <div className="inline-block mr-4">
          <img
            className="rounded-md"
            src={`https://via.placeholder.com/${posterSize}`}
            alt="placeholder"
          />
          <h2 className="text-center">Title</h2>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <img
            className="rounded-md"
            src={`https://via.placeholder.com/${posterSize}`}
            alt="placeholder"
          />
          <div className="flex gap-1 text-xs text-slate-300">
            <p>2022</p>
            <span>•</span>
            <p className="flex justify-center items-center gap-1">
              <MdLocalMovies />
              <span>Movie</span>
            </p>
            <span>•</span>
            <p>18+</p>
          </div>
          <h2 className="font-bold">Movie Title</h2>
        </div>
      )}
    </>
  );
};

export default Movie;
