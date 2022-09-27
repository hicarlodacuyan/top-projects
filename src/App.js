import { Link } from 'react-router-dom';
import Woman from './images/landing-page-bg.jpg';

const App = () => {
  return (
    <div
      className="w-full h-full lg:bg-top md:bg-right bg-[top_right_-7rem] bg-cover bg-auto  bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${Woman})` }}
    >
      <div className="max-w-6xl w-full p-4 flex flex-col justify-center gap-8 text-slate-100">
        <h1 className="md:text-8xl text-4xl font-black">Shop With Us</h1>
        <p className="max-w-screen-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Link
          className="border-2 border-slate-300 self-start p-4 hover:bg-slate-700 uppercase"
          to="/shopping-cart/shop"
        >
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default App;
