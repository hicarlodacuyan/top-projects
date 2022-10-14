import React from "react";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/Request";

const Recommended = ({ posterSize }) => {
  const { data } = useQuery(["recommendedMovie"], async () => {
    const requestRecommendedMovies = await fetch(request.recommended);
    const recommendedMovies = await requestRecommendedMovies.json();

    return recommendedMovies.results;
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
