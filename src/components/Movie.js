import React, { useState, useContext, useEffect } from "react";
import { BookmarkedContext } from "../BookmarkedContext";
import { app } from "../firebase-config";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { MdLocalMovies, MdBookmarkBorder, MdBookmark } from "react-icons/md";

const Movie = ({ posterSize, trendingMovie, recommendedMovie, bookmarks }) => {
  const { bookmarksTemp, setBookmarksTemp } = useContext(BookmarkedContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const handleBookmarkData = async (movie) => {
    if (!user) {
      alert("You must be login to add bookmark");
      return;
    }

    try {
      const userRef = await doc(db, "users", user?.uid);
      const bookmarkedRef = collection(userRef, "bookmarked_movies");
      const docSnapshot = await getDocs(bookmarkedRef);

      const docSnapshotData = docSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      const trendingMovieData = {
        title: "title" in movie ? movie.title : movie.name,
        release_date:
          "release_date" in movie ? movie.release_date : movie.first_air_date,
        poster_path: movie.poster_path,
        adult: movie.adult ? "18+" : "PG",
      };

      const currentMovieRefIdx = bookmarksTemp.findIndex(
        (bookmark) => bookmark.title === movie.title
      );

      if (currentMovieRefIdx !== -1) {
        deleteDoc(
          doc(
            userRef,
            "bookmarked_movies",
            docSnapshotData[currentMovieRefIdx].id
          )
        );
        console.log(`${movie.title} has been removed from bookmarked!`);
      } else {
        addDoc(bookmarkedRef, trendingMovieData);
        console.log(`${movie.title} has been added to bookmarked!`);
      }
    } catch (error) {
      console.log(error);
    }
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
              onClick={() => handleBookmarkData(trendingMovie)}
              className="flex items-center justify-center absolute right-4 top-4 bg-gray-900 bg-opacity-50 rounded-full w-7 h-7 text-xl"
            >
              {isBookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
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
              onClick={() => handleBookmarkData(recommendedMovie)}
              className="flex items-center justify-center absolute right-4 top-4 bg-gray-900 bg-opacity-50 rounded-full w-7 h-7 text-xl"
            >
              {isBookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
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
