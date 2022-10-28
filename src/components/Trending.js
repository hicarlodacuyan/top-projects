import React from "react";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/Request";

const Trending = ({ posterSize, page }) => {
  const { data } = useQuery(["trending"], async () => {
    const requestTrendingMovies = await fetch(request.trendingMovies);
    const trendingMovies = await requestTrendingMovies.json();

    const requestTrendingShows = await fetch(request.trendingShows);
    const trendingShows = await requestTrendingShows.json();

    switch (page) {
      case "Movies":
        return trendingMovies.results.map((trendingMovie) => ({
          ...trendingMovie,
          isBookmark: false,
        }));
      case "Shows":
        return trendingShows.results.map((trendingShow) => ({
          ...trendingShow,
          isBookmark: false,
        }));
      default:
        return [...trendingMovies.results, ...trendingShows.results].map(
          (movie) => ({ ...movie, isBookmark: false })
        );
    }
  });

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Trending {page === "Home" ? "" : page}</h1>
      <ul className="gap-4 overflow-x-auto w-full whitespace-nowrap snap-x scrollbar">
        {data?.map((trendingMovie, index) => {
          return (
            <li className="inline-block snap-start" key={index}>
              <Movie posterSize={posterSize} trendingMovie={trendingMovie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Trending;
