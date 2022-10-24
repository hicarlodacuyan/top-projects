import React, { useEffect, useContext } from "react";
import { BookmarkedContext, isBookmarkedContext } from "../BookmarkedContext";
import Movie from "./Movie";
import { app } from "../firebase-config";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDocs, collection } from "firebase/firestore";

const BookmarkedQueryResults = ({ posterSize }) => {
  const { isBookmarked, setIsBookmarked } = useContext(isBookmarkedContext);
  const { bookmarks, setBookmarks } = useContext(BookmarkedContext);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchBookmarkedData = async () => {
      const userRef = await doc(db, "users", user.uid);
      const bookmarkedRef = collection(userRef, "bookmarked_movies");
      const bookmarkedData = await getDocs(bookmarkedRef);

      const bookmarkDataArray = bookmarkedData.docs.map((doc) => {
        return {
          id: doc.id,
          isBookmarked: false,
          ...doc.data(),
        };
      });

      setBookmarks(bookmarkDataArray);
    };

    fetchBookmarkedData();
  }, [isBookmarked]);

  return (
    <div className="flex-1 flex flex-col gap-2 min-h-screen">
      <h1 className="text-2xl">Bookmarked Movies & TV Shows</h1>
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
