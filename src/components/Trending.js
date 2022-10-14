import React from "react";
import Movie from "./Movie";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/Request";

const Trending = ({ posterSize }) => {
  const { data } = useQuery(["trendingMovie"], async () => {
    const requestTrendingMovies = await fetch(request.trending);
    const trendingMovies = await requestTrendingMovies.json();

    return trendingMovies.results;
  });

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">Trending</h1>
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
