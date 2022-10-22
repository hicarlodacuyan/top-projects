import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";
import { BookmarkedContext } from "./BookmarkedContext";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <div className="bg-slate-900 text-white">
      <BookmarkedContext.Provider value={{ bookmarks, setBookmarks }}>
        <RouteSwitch />
      </BookmarkedContext.Provider>
    </div>
  );
};

export default App;
