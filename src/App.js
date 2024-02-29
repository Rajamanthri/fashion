import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Wishlist from './Pages/Wishlist';
import Footer from './Components/Footer/Footer';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="Men" />} />
          <Route path='/women' element={<ShopCategory category="Women" />} />
          <Route path='/kids' element={<ShopCategory category="Kids" />} />
          <Route path='product' element={<Product />}>
            <Route path='productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
