import React, { useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import BookmarkedQueryResults from "../components/BookmarkedQueryResults";

const Bookmarked = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="lg:flex lg:p-4 gap-4 flex lg:flex-row flex-col">
      <Nav />
      <main className="flex flex-col flex-1 gap-4 p-4">
        <Search setQuery={setQuery} />
        <BookmarkedQueryResults posterSize="200" />
      </main>
    </div>
  );
};

export default Bookmarked;
