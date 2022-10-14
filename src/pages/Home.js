import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <div className="lg:flex lg:p-4 gap-4 flex lg:flex-row flex-col">
      <Nav />
      <main className="flex flex-col flex-1 gap-4 p-4">
        <QueryClientProvider client={queryClient}>
          <Search />
          <Trending posterSize="300x150" />
          <Recommended posterSize="200" />
        </QueryClientProvider>
      </main>
    </div>
  );
};

export default Home;
