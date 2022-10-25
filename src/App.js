import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";
import { BookmarkedContext } from "./BookmarkedContext";

const App = () => {
  const [bookmarksTemp, setBookmarksTemp] = useState([]);

  return (
    <div className="bg-slate-900 text-white">
      <BookmarkedContext.Provider value={{ bookmarksTemp, setBookmarksTemp }}>
        <RouteSwitch />
      </BookmarkedContext.Provider>
    </div>
  );
};

export default App;
