import React from "react";
import request from "../utils/Request";
import { useQuery } from "@tanstack/react-query";
import Movie from "./Movie";

const QueryResults = ({ posterSize, query, page }) => {
  const { data } = useQuery(["queryMoviesAndShows"], async () => {
    const requestTrendingMovies = await fetch(request.trendingMovies);
    const trendingMovies = await requestTrendingMovies.json();

    const requestTrendingShows = await fetch(request.trendingShows);
    const trendingShows = await requestTrendingShows.json();

    const requestRecommendedMovies = await fetch(request.recommendedMovies);
    const recommendedMovies = await requestRecommendedMovies.json();

    const requestRecommendedShows = await fetch(request.recommendedShows);
    const recommendedShows = await requestRecommendedShows.json();

    switch (page) {
      case "Movies":
        return [...trendingMovies.results, ...recommendedMovies.results];
      case "Shows":
        return [...trendingShows.results, ...recommendedShows.results];
      default:
        return [
          ...trendingMovies.results,
          ...trendingShows.results,
          ...recommendedMovies.results,
          ...recommendedShows.results,
        ];
    }
  });

  return (
    <div className="flex-1 flex flex-col gap-2 h-screen">
      <h1 className="text-2xl">Search Results</h1>
      <ul className="flex-1 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
        {data
          ?.filter((movie) => {
            if (query === "") return movie;
            else if (
              String(movie.title).toLowerCase().includes(query.toLowerCase()) ||
              String(movie.name).toLowerCase().includes(query.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie, index) => {
            return (
              <Movie
                key={index}
                posterSize={posterSize}
                recommendedMovie={movie}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default QueryResults;
