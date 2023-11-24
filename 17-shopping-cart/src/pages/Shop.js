import React, { useState, useEffect } from 'react';
import ShopItem from '../component/ShopItem';

const Shop = () => {
  const PRODUCTS_KEY =
    'https://api.escuelajs.co/api/v1/products?offset=1&limit=30';
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
    <div className="flex justify-center h-full">
      <div className="max-w-6xl">
        <ul className="grid gap-4 lg:grid-cols-6 md:grid-cols-5 grid-cols-2 gap-4 overflow-auto p-4">
          {shopItems.map((shopItem) => {
            const { id, images, category, price, title } = shopItem;
            return (
              <ShopItem
                key={id}
                id={id}
                image={
                  images[0] === ''
                    ? 'https://via.placeholder.com/140x100'
                    : images[0]
                }
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
