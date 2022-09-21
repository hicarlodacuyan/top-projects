import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import ShopItem from "../component/ShopItem";

const Shop = () => {
  const PRODUCTS_KEY = "https://fakestoreapi.com/products";
  const [shopItems, setShopItems] = useState([]);

  const getProducts = async () => {
    const response = await fetch(PRODUCTS_KEY);
    const products = await response.json();
    setShopItems(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl p-4">
        <ul className="grid gap-4 lg:grid-cols-6 md:grid-cols-5 grid-cols-2">
          {shopItems.map((shopItem) => {
            const { id, image, category, price, title } = shopItem;
            
            return (
              <ShopItem 
                key={id}
                id={id} 
                image={image} 
                category={category} 
                price={price} 
                title={title} 
              />
            );
          })}
        </ul>  
      </div>  
    </div>
  );
};

export default Shop;