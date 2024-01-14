import './App.css';
import Navebar from './components/Navebar/Navebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ProductCatagory from './pages/ProductCatagory';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Product from './pages/Product';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ProductCatagory catagory= "mens" />} />
          <Route path="/womens" element={<ProductCatagory catagory= "womens"/>} />
          <Route path="/kids" element={<ProductCatagory  catagory= "kids"/>} />
         
          <Route path="/login" element={<Loginsignup/>} />
          <Route path='/cart'   element= {<Cart/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
