import React from "react";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/Request";
import shuffle from "../utils/shuffle";

const Trending = ({ posterSize, page }) => {
  const { data } = useQuery(["trending"], async () => {
    const requestTrendingMovies = await fetch(request.trendingMovies);
    const trendingMovies = await requestTrendingMovies.json();

    const requestTrendingShows = await fetch(request.trendingShows);
    const trendingShows = await requestTrendingShows.json();

    switch (page) {
      case "Movies":
        return trendingMovies.results;
      case "Shows":
        return trendingShows.results;
      default:
        return [...trendingMovies.results, ...trendingShows.results];
    }
  });

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Trending</h1>
      <ul className="gap-4 overflow-x-auto w-full whitespace-nowrap snap-x scrollbar">
        {data
          ?.sort(() => Math.random() - 0.5)
          .map((trendingMovie, index) => {
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
