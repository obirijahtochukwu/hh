import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./interviewTest/pages/productDetail/Index";
import { useEffect } from "react";
import { useGlobalContext } from "./context";
import axios from "axios";
import Favorites from "./interviewTest/pages/favorites/Index";
import ProductList from "./interviewTest/pages/productList/Index";

function App() {
  const { setProducts } = useGlobalContext();

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((json) =>
      setProducts(json.data)
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
