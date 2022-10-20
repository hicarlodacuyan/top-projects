import React from "react";
import { app } from "../firebase-config";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, collection, addDoc } from "firebase/firestore";
import { MdLocalMovies, MdBookmarkBorder, MdBookmark } from "react-icons/md";

const Movie = ({ posterSize, trendingMovie, recommendedMovie }) => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const handleBookmarkTrendingMovie = async () => {
    const userRef = await doc(db, "users", user.uid);
    const bookmarkedRef = collection(userRef, "bookmarked_movies");

    const trendingMovieData = {
      title:
        "title" in trendingMovie ? trendingMovie.title : trendingMovie.name,
      release_date:
        "release_date" in trendingMovie
          ? trendingMovie.release_date
          : trendingMovie.first_air_date,
      backdrop_path: `https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`,
      adult: trendingMovie.adult ? "18+" : "PG",
    };

    // This is how we read data from Firestore
    // setTimeout(async () => {
    //   const bookmarkedData = await getDocs(bookmarkedRef);

    //   bookmarkedData.docs.forEach((doc) => console.log(doc.data()));
    // }, 5000);

    addDoc(bookmarkedRef, trendingMovieData);
  };

  const handleBookmarkRecommendedMovie = async () => {
    const userRef = await doc(db, "users", user.uid);
    const bookmarkedRef = collection(userRef, "bookmarked_movies");

    const recommendedMovieData = {
      title:
        "title" in recommendedMovie
          ? recommendedMovie.title
          : recommendedMovie.name,
      release_date:
        "release_date" in recommendedMovie
          ? recommendedMovie.release_date
          : recommendedMovie.first_air_date,
      backdrop_path: `https://image.tmdb.org/t/p/original${recommendedMovie.backdrop_path}`,
      adult: recommendedMovie.adult ? "18+" : "PG",
    };

    addDoc(bookmarkedRef, recommendedMovieData);
  };

  return (
    <>
      {posterSize === "300x150" ? (
        <div className="mr-4 relative">
          <div className="relative">
            <img
              className="rounded-md md:w-96 w-80 h-auto brightness-50"
              src={`${
                trendingMovie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`
                  : "https://via.placeholder.com/384x216"
              }`}
              alt="placeholder"
            />
            <button
              onClick={handleBookmarkTrendingMovie}
              className="flex items-center justify-center absolute right-4 top-4 bg-gray-900 bg-opacity-50 rounded-full w-7 h-7 text-xl"
            >
              <MdBookmarkBorder />
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 text-xs absolute left-4 md:top-40 top-32">
            <p>{trendingMovie.release_date || trendingMovie.first_air_date}</p>
            <span>•</span>
            <p className="flex justify-center items-center gap-1">
              <MdLocalMovies />
              <span>{trendingMovie.release_date ? "Movie" : "Series"}</span>
            </p>
            <span>•</span>
            <p>{trendingMovie.adult ? "18+" : "PG"}</p>
          </div>
          <h2 className="font-bold absolute left-4 w-11/12 truncate md:top-44 top-36">
            {trendingMovie.title || trendingMovie.name}
          </h2>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="relative">
            <img
              className="rounded-md"
              src={`${
                recommendedMovie.poster_path
                  ? `https://image.tmdb.org/t/p/original${recommendedMovie.poster_path}`
                  : "https://via.placeholder.com/384x216"
              }`}
              alt="placeholder"
            />
            <button
              onClick={handleBookmarkRecommendedMovie}
              className="flex items-center justify-center absolute right-4 top-4 bg-gray-900 bg-opacity-50 rounded-full w-7 h-7 text-xl"
            >
              <MdBookmarkBorder />
            </button>
          </div>
          <div className="flex gap-1 text-xs text-slate-300">
            <p>
              {recommendedMovie.release_date || recommendedMovie.first_air_date}
            </p>
            <span>•</span>
            <p className="flex justify-center items-center gap-1">
              <MdLocalMovies />
              <span>{recommendedMovie.release_date ? "Movie" : "Series"}</span>
            </p>
            <span>•</span>
            <p>{recommendedMovie.adult ? "18+" : "PG"}</p>
          </div>
          <h2 className="text-sm font-bold">
            {recommendedMovie.title || recommendedMovie.name}
          </h2>
        </div>
      )}
    </>
  );
};

export default Movie;
