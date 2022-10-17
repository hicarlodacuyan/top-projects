import React from "react";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/Request";
import shuffle from "../utils/shuffle";

const Recommended = ({ posterSize }) => {
  const { data } = useQuery(["recommended"], async () => {
    const requestRecommendedMovies = await fetch(request.recommendedMovies);
    const recommendedMovies = await requestRecommendedMovies.json();

    const requestRecommendedShows = await fetch(request.recommendedShows);
    const recommendedShows = await requestRecommendedShows.json();

    return shuffle([...recommendedMovies.results, ...recommendedShows.results]);
  });

  return (
    <div className="flex-1 flex flex-col gap-2">
      <h1 className="text-2xl">Recommended</h1>
      <ul className="grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
        {data?.map((recommendedMovie, index) => {
          return (
            <Movie
              key={index}
              posterSize={posterSize}
              recommendedMovie={recommendedMovie}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Recommended;
