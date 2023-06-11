import React, { useEffect } from "react";
import {
  HeaderCompoment,
  ProductListCompoment,
} from "../../components/pages/favorites/Index.";

import { useGlobalContext } from "../../../context";
import { FooterCompoment } from "../../components/pages/productList/Index";

export default function Index() {
  const favorites = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(favorites);
  }, []);

  return (
    <React.Fragment>
      <div style={{ padding: "calc(16*(100vw/428))" }}>
        <HeaderCompoment />
        <ProductListCompoment favorites={favorites} />
      </div>

      <FooterCompoment />
    </React.Fragment>
  );
}
