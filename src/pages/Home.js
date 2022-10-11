import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";

const Home = () => {
  return (
    <div className="md:flex h-screen p-4 gap-4">
      <Nav />
      <div className="flex flex-col bg-blue-300 flex-1">
        <Search />
        <Trending />
        <Recommended />
      </div>
    </div>
  );
};

export default Home;
