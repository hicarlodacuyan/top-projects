import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const ShopItem = ({ id, image, category, price, title }) => {
  const {setCartItems} = useContext(CartContext);
  
  const addToCart = () => {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === id)) {
        alert("Item is already in the cart.");
        return prev;
      }

      return prev.concat({id, image, category, price, title});
    });
  }

  return (
    <li className="flex flex-col bg-white rounded-md drop-shadow">
      <div className="flex flex-col justify-between p-2">
        <img src={image} alt={category} className="w-full h-24 object-scale-down"></img>
        <p className="text-center font-bold">${price}</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 p-2 bg-slate-100">
        <h2 id="truncate" className="flex-1 text-xs text-center">{title}</h2>

        <button 
          onClick={addToCart} 
          className="flex justify-center items-center gap-2 py-2 md:px-2 p-1 bg-slate-700 text-white rounded hover:bg-amber-300 transition duration-300"
        >
          <MdOutlineShoppingCart />
          <span className="text-xs">Add to cart</span>
        </button>
      </div>
    </li>
  );
};

export default ShopItem;