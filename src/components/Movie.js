import React from "react";

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
        <div className="flex flex-col">
          <img
            className="rounded-md"
            src={`https://via.placeholder.com/${posterSize}`}
            alt="placeholder"
          />
          <h2 className="text-center">Title</h2>
        </div>
      )}
    </>
  );
};

export default Movie;
