import React from "react";
import { MdLocalMovies } from "react-icons/md";

const Movie = ({ posterSize }) => {
  return (
    <>
      {posterSize === "300x150" ? (
        <div className="mr-4 relative">
          <img
            className="rounded-md"
            src={`https://via.placeholder.com/${posterSize}`}
            alt="placeholder"
          />
          <div className="flex gap-1 text-xs absolute left-4 top-24">
            <p>2022</p>
            <span>•</span>
            <p className="flex justify-center items-center gap-1">
              <MdLocalMovies />
              <span>Movie</span>
            </p>
            <span>•</span>
            <p>18+</p>
          </div>
          <h2 className="text-xl font-bold text-center absolute left-4 top-28">
            Movie Title
          </h2>
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
          <h2 className="text-sm font-bold">Movie Title</h2>
        </div>
      )}
    </>
  );
};

export default Movie;
