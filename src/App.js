import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";
import { BookmarkedContext, isBookmarkedContext } from "./BookmarkedContext";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-slate-900 text-white">
      <BookmarkedContext.Provider value={{ bookmarks, setBookmarks }}>
        <isBookmarkedContext.Provider value={{ isBookmarked, setIsBookmarked }}>
          <RouteSwitch />
        </isBookmarkedContext.Provider>
      </BookmarkedContext.Provider>
    </div>
  );
};

export default App;
