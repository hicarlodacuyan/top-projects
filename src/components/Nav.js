import React from "react";
import { NavLink } from "react-router-dom";
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

const Nav = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <nav className="flex lg:flex-col flex-row items-center justify-between bg-slate-800 md:max-h-96 lg:rounded-md p-4 sticky lg:top-4 top-0 z-50">
      <div>
        <MdMovieCreation className="text-red-500 text-2xl" />
      </div>
      <div className="flex lg:flex-col gap-4">
        <NavLink
          to="/entertainment-webapp/home"
          className={({ isActive }) =>
            isActive ? "text-white text-xl" : "text-slate-500 text-xl"
          }
        >
          <MdViewQuilt />
        </NavLink>

        <NavLink
          to="/entertainment-webapp/movies"
          className={({ isActive }) =>
            isActive ? "text-white text-xl" : "text-slate-500 text-xl"
          }
        >
          <MdLocalMovies />
        </NavLink>

        <NavLink
          to="/entertainment-webapp/shows"
          className={({ isActive }) =>
            isActive ? "text-white text-xl" : "text-slate-500 text-xl"
          }
        >
          <MdTv />
        </NavLink>

        <NavLink
          to="/entertainment-webapp/bookmarked"
          className={({ isActive }) =>
            isActive ? "text-white text-xl" : "text-slate-500 text-xl"
          }
        >
          <MdOutlineBookmark />
        </NavLink>
      </div>

      <div>
        {user ? <SignOut auth={auth} user={user} /> : <SignIn auth={auth} />}
      </div>
    </nav>
  );
};

export default Nav;
