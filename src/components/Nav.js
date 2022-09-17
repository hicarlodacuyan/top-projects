import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <nav className="flex justify-around p-8 bg-slate-50">
        <Link to={"/"} className="text-3xl font-bold underline">Logo</Link>
        <ul className="flex gap-5">
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;