import React, { useEffect } from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState({});

  const [favoriteStocks, setFavoriteStocks] = useState([]);

  const addStock = (item) => {
    setFavoriteStocks([...favoriteStocks, item]);
  };

  const removeStock = (id) => {
    const item = favoriteStocks.filter((item) => item.id !== id);
    setFavoriteStocks(item);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(favoriteStocks));
  }, [favoriteStocks]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        productDetail,
        setProductDetail,
        addStock,
        removeStock,
        favoriteStocks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
