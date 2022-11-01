import React, { useState } from "react";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/Request";

const Trending = ({ posterSize, page }) => {
  const [loadingComponent, setLoadingComponent] = useState([
    "", "", "",
    "", "", "",
    "", "", "",
    "", "", "",
    "", "", "",
    "", "", "",
  ]);
  const { data, isLoading } = useQuery(["trending"], async () => {
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
        {isLoading ? (
          loadingComponent.map((img, index) => {
            return (
              <li className="inline-block snap-start" key={index}>
                <div className="mr-4 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-10">
                  <img
                    className="rounded-md md:w-96 w-80 h-auto blur-xl"
                    src="https://via.placeholder.com/384x216"
                    alt="placeholder"
                  />
                </div>
              </li>
            );
          })
        ) : (
          data?.map((trendingMovie, index) => {
            return (
              <li className="inline-block snap-start" key={index}>
                <Movie posterSize={posterSize} trendingMovie={trendingMovie} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Trending;
