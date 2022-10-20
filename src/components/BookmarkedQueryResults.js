import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { app } from "../firebase-config";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDocs, collection } from "firebase/firestore";

const BookmarkedQueryResults = ({ posterSize }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchBookmarkedData = async () => {
      const userRef = await doc(db, "users", user.uid);
      const bookmarkedRef = collection(userRef, "bookmarked_movies");
      const bookmarkedData = await getDocs(bookmarkedRef);

      const bookmarkDataArray = bookmarkedData.docs.map((doc) => doc.data());
      setBookmarks(bookmarkDataArray);
    };

    fetchBookmarkedData();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-screen">
      <h1 className="text-2xl">Bookmarked</h1>
      <ul className="flex-1 grid 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
        {bookmarks.map((movie, index) => {
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

export default BookmarkedQueryResults;
