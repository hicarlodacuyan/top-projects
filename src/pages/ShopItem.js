import { useLocation } from "react-router-dom";

const ShopItem = () => {
    const location = useLocation();
    const { shopItem } = location.state;

    console.log(shopItem);

    return (
        <div>
            <h1>{shopItem.name}</h1>
            <img src={shopItem.images.icon} alt="icon"></img>
            <p>{shopItem.description}</p>
        </div>
    );
};

export default ShopItem;