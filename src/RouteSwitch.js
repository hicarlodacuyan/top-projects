import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/shopping-cart' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;