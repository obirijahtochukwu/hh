import React, { useEffect } from "react";
import {
  FooterCompoment,
  HeaderCompoment,
  NoProductFoundCompoment,
  ProductListCompoment,
} from "../../components/pages/productList/Index";
import { useState } from "react";
import { useGlobalContext } from "../../../context";

export default function Index() {
  const { products } = useGlobalContext();

  const [inputValue, setInputValue] = useState("");

  const filteredProducts = products.filter(
    (item, index) =>
      index < 10 && item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const props = { inputValue, setInputValue, filteredProducts };
  return (
    <React.Fragment>
      <div className="" style={{ padding: "calc(16*(100vw/428))" }}>
        <HeaderCompoment props={props} />

        <ProductListCompoment props={props} />

        <NoProductFoundCompoment props={props} />
      </div>

      <FooterCompoment />
    </React.Fragment>
  );
}
