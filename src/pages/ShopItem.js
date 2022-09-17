import { useLocation } from "react-router-dom";

const ShopItem = () => {
    const location = useLocation();
    const { shopItem } = location.state;

    return (
        <div className="flex flex-col justify-center items-center bg-slate-300 p-8 h-screen">
            <h1 className="text-xl text-slate-800">{shopItem.name}</h1>
            <img src={shopItem.images.icon} alt="icon" className="h-96 w-96"></img>
            <p className="text-sm italic text-slate-500">{shopItem.description}</p>
        </div>
    );
};

export default ShopItem;