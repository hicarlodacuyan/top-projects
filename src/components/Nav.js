import React from "react";
import {
  MdMovieCreation,
  MdViewQuilt,
  MdLocalMovies,
  MdTv,
  MdOutlineBookmark,
  MdAccountCircle,
} from "react-icons/md";

const profileIcon = { color: "#586488", fontSize: "1.5em" };
const primaryIcon = { color: "#FF4B4A", fontSize: "1.5em" };
const secondaryIcon = { color: "#586488", fontSize: "1.25em" };

const Nav = () => {
  return (
    <nav className="flex lg:flex-col flex-row items-center justify-between bg-slate-800 md:max-h-96 lg:rounded-md p-4 sticky lg:top-4 top-0 z-50">
      <div>
        <MdMovieCreation style={primaryIcon} />
      </div>
      <div className="flex lg:flex-col gap-4">
        <MdViewQuilt style={secondaryIcon} />
        <MdLocalMovies style={secondaryIcon} />
        <MdTv style={secondaryIcon} />
        <MdOutlineBookmark style={secondaryIcon} />
      </div>
      <div>
        <MdAccountCircle style={profileIcon} />
      </div>
    </nav>
  );
};

export default Nav;
