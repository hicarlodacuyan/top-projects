import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './CartContext';
import Nav from './component/Nav';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Nav />
        <Routes>
          <Route path="/shopping-cart" element={<App />} />
          <Route path="/shopping-cart/about" element={<About />} />
          <Route path="/shopping-cart/contact" element={<Contact />} />
          <Route path="/shopping-cart/shop" element={<Shop />} />
          <Route path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
        limit={3} 
      />
    </BrowserRouter>
  );
};

export default RouteSwitch;
