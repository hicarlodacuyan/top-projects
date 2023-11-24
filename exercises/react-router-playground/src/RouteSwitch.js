import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ShopItem />} />
            </Routes>
        </BrowserRouter>
    );
};
  
export default RouteSwitch;