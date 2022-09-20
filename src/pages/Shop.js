import React, { useState, useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Shop = () => {
  const PRODUCTS_KEY = "https://fakestoreapi.com/products";
  const [shopItems, setShopItems] = useState([]);
  const getProducts = async () => {
    const response = await fetch(PRODUCTS_KEY);
    const products = await response.json();
    setShopItems(products);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl p-4">
        <ul className="grid gap-4 lg:grid-cols-6 md:grid-cols-5 grid-cols-2">
          {shopItems.map((shopItem) => {
            return (
              <li className="flex flex-col bg-white gap-4 p-4 rounded-md drop-shadow" key={shopItem.id}>
                <div className="flex flex-col gap-2">
                  <img src={shopItem.image} alt={shopItem.category} className="w-full h-24 object-scale-down"></img>
                  <p className="text-center font-bold">${shopItem.price}</p>
                </div>

                <h2 className="flex-1 text-xs text-center">{shopItem.title}</h2>

                <button className="flex justify-center items-center gap-2 p-2 bg-slate-700 text-white rounded hover:bg-amber-300 transition duration-300">
                  <MdOutlineShoppingCart />
                  <span className="text-sm">Add to cart</span>
                </button>
              </li>
            );
          })}
        </ul>  
      </div>  
    </div>
  );
};

export default Shop;