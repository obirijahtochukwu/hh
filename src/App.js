import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./interviewTest/pages/productDetail/Index";
import "./clientApp/styles/theme.scss";
import { useEffect } from "react";
import { useGlobalContext } from "./context";
import axios from "axios";
import Favorites from "./interviewTest/pages/favorites/Index";
import ProductList from "./interviewTest/pages/productList/Index";
// import { Auction } from "./clientApp/Aunction/Auction";
import { Faqs } from "./clientApp/Faq/Faqs";
import { Login } from "./clientApp/Login/Login";
import { Auction } from "./clientApp/Aunction/Auction";

function App() {
  const { setProducts } = useGlobalContext();

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((json) =>
      setProducts(json.data)
    );
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/auction" />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/faqs"} element={<Faqs />} />
      <Route path={"/auction"} element={<Auction />} />
    </Routes>
  );

  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route path="/" element={<ProductList />} />
  //       <Route path="/favorites" element={<Favorites />} />
  //       <Route path="/product-detail" element={<ProductDetail />} />
  //     </Routes>
  //   </div>
  // );
}

export default App;
