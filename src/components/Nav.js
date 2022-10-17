import React from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import {
  MdMovieCreation,
  MdViewQuilt,
  MdLocalMovies,
  MdTv,
  MdOutlineBookmark,
} from "react-icons/md";

const primaryIcon = { color: "#FF4B4A", fontSize: "1.5em" };
const secondaryIcon = { color: "#586488", fontSize: "1.25em" };

const Nav = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <nav className="flex lg:flex-col flex-row items-center justify-between bg-slate-800 md:max-h-96 lg:rounded-md p-4 sticky lg:top-4 top-0 z-50">
      <div>
        <MdMovieCreation style={primaryIcon} />
      </div>
      <div className="flex lg:flex-col gap-4">
        <Link to="/entertainment-webapp">
          <MdViewQuilt style={secondaryIcon} />
        </Link>
        <Link to="/entertainment-webapp/movies">
          <MdLocalMovies style={secondaryIcon} />
        </Link>
        <Link to="/entertainment-webapp/shows">
          <MdTv style={secondaryIcon} />
        </Link>
        <Link to="/entertainment-webapp/bookmarked">
          <MdOutlineBookmark style={secondaryIcon} />
        </Link>
      </div>
      <div>
        {user ? <SignOut auth={auth} user={user} /> : <SignIn auth={auth} />}
      </div>
    </nav>
  );
};

export default Nav;
