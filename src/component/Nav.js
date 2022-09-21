import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { MdOutlineShoppingCart, MdOutlineAccountCircle, MdMenu } from "react-icons/md";

const Nav = () => {
  const mobileNavRef = useRef();
  const showMobileNav = () => mobileNavRef.current.classList.toggle("hidden");
  const { cartItems } = useContext(CartContext);
  const numberOfCartItems = cartItems.length;

  return (
    <>
    <nav className="py-4 border-b-[1px] border-slate-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center md:gap-4 gap-2 text-slate-700 md:text-2xl text-xl">
            {/* Mobile Menu button */}
            <button className="md:hidden flex items-center">
              <MdMenu className="hover:text-black" onClick={showMobileNav} />
            </button>

            {/* Logo */}
            <Link to="/shopping-cart">
              <h1 className="font-bold hover:text-black">Shopping Cart</h1>
            </Link>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex gap-4 text-slate-400 font-semibold">
            <Link to="/shop" className="hover:text-slate-700">Shop</Link>
            <Link to="/contact" className="hover:text-slate-700">Contact</Link>
            <Link to="/about" className="hover:text-slate-700">About</Link>
          </div>
          
          {/* Secondary Nav */}
          <div className="flex md:gap-4 gap-2 text-slate-700 md:text-2xl text-xl">
            <Link to="/cart" className="relative flex justify-center items-center">
              <MdOutlineShoppingCart className="hover:text-amber-400 transition duration-300" />
              {numberOfCartItems === 0 ?
                "" :
                <span className="flex justify-center items-center text-xs absolute rounded-full w-4 h-4 left-3 bottom-3 bg-red-400 text-white">{numberOfCartItems}</span>
              }
            </Link>
            <MdOutlineAccountCircle />
          </div>
        </div>
      </div>
    </nav>
    
    {/* Mobile Menu */}
    <div ref={mobileNavRef} className="hidden md:hidden md:gap-4 flex flex-col gap-2 p-4 text-md text-slate-400 bg-slate-200 font-semibold">
      <Link to="/shop" className="hover:text-slate-700">Shop</Link>
      <Link to="/contact" className="hover:text-slate-700">Contact</Link>
      <Link to="/about" className="hover:text-slate-700">About</Link>
    </div>
  </>
  );
};

export default Nav;