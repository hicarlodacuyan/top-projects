import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex items-center gap-4">
      <MdSearch fontSize="1.5em" color="#586488" />
      <span className="text-slate-300">Search for Movies or TV Series</span>
    </div>
  );
};

export default Search;
