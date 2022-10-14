import React from "react";
import { MdLocalMovies } from "react-icons/md";

const Movie = ({ posterSize, trendingMovie, recommendedMovie }) => {
  return (
    <>
      {posterSize === "300x150" ? (
        <div className="mr-4 relative">
          <img
            className="rounded-md md:w-96 w-80 h-auto"
            src={`https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`}
            alt="placeholder"
          />
          <div className="flex gap-1 text-xs absolute left-4 md:top-40 top-32">
            <p>{trendingMovie.release_date}</p>
            <span>•</span>
            <p className="flex justify-center items-center gap-1">
              <MdLocalMovies />
              <span>Movie</span>
            </p>
            <span>•</span>
            <p>{trendingMovie.adult ? "18+" : "PG"}</p>
          </div>
          <h2 className="font-bold absolute left-4 w-11/12 truncate md:top-44 top-36">
            {trendingMovie.title}
          </h2>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <img
            className="rounded-md"
            src={`https://image.tmdb.org/t/p/original${recommendedMovie.poster_path}`}
            alt="placeholder"
          />
          <div className="flex gap-1 text-xs text-slate-300">
            <p>{recommendedMovie.release_date}</p>
            <span>•</span>
            <p className="flex justify-center items-center gap-1">
              <MdLocalMovies />
              <span>Movie</span>
            </p>
            <span>•</span>
            <p>{recommendedMovie.adult ? "18+" : "PG"}</p>
          </div>
          <h2 className="text-sm font-bold">{recommendedMovie.title}</h2>
        </div>
      )}
    </>
  );
};

export default Movie;
