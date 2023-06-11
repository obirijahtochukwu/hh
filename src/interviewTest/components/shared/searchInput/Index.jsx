import React from "react";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";

export default function SearchInput({ props }) {
  const { setInputValue } = props;
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue(searchProducts);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchProducts, 500]);

  return (
    <div className={styles.inputContainer}>
      <div
        style={{ backgroundImage: "url('/media/home/Group (3).png')" }}
        className={styles.searchImg}
      ></div>
      <input
        type="text"
        placeholder="search"
        value={searchProducts}
        onChange={(e) => setSearchProducts(e.target.value)}
      />
      <div
        style={{ backgroundImage: "url('/media/home/Filter.png')" }}
        className={styles.filterImg}
      ></div>
    </div>
  );
}
