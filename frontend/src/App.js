import "./App.css";
import Navebar from "./components/Navebar/Navebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductCatagory from "./pages/ProductCatagory";
import Loginsignup from "./pages/Loginsignup";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Fotter from "./components/Footer/Fotter";
import mens_banner from "./components/Assets/banner_mens.png";
import womens_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ProductCatagory banner={mens_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={
              <ProductCatagory banner={womens_banner} category="women" />
            }
          />
          <Route
            path="/kids"
            element={<ProductCatagory banner={kids_banner} category="kid" />}
          />

          <Route path="/login" element={<Loginsignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
      
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
