import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";

const Home = () => {
  return (
    <div className="lg:flex lg:p-4 gap-4 flex lg:flex-row flex-col">
      <Nav />
      <main className="flex flex-col flex-1 gap-4 p-4">
        <Search />
        <Trending posterSize="300x150" />
        <Recommended posterSize="200" />
      </main>
    </div>
  );
};

export default Home;
