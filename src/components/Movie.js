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
import MoviePosterLarge from "./MoviePosterLarge";
import MoviePosterSmall from "./MoviePosterSmall";

const Movie = ({ posterSize, trendingMovie, recommendedMovie }) => {
  const { bookmarksTemp } = useContext(BookmarkedContext);

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
        <MoviePosterLarge movie={trendingMovie} handleBookmarkData={handleBookmarkData} />
      ) : (
        <MoviePosterSmall movie={recommendedMovie} handleBookmarkData={handleBookmarkData} />
      )}
    </>
  );
};

export default Movie;
