import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.com/v2/shop/br");
        const dataItems = await data.json();
        const dailyItemsEntries = await dataItems.data.daily.entries;

        setItems(dailyItemsEntries);
        
    };

    return (
        <div className="flex flex-col gap-5 p-10">
            <h1 className="text-2xl font-bold">Hello from Shop</h1>
            <ul className="grid gap-4 grid-cols-3 grid-rows-3 justify-items-center">
                {items.map((item) => {
                    return (
                        <li key={item.items[0].id}>
                            <Link to={`/shop/${item.items[0].id}`} state={{ shopItem: {...item.items[0]} }}>
                                <p>{item.items[0].name}</p>
                                <img src={item.items[0].images.smallIcon}></img>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
  
export default Shop;