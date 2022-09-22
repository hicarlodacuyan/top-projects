import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './CartContext';
import Nav from './component/Nav';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Nav />
        <Routes>
          <Route path="/shopping-cart" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
