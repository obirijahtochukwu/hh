import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context";
import {
  CarouselComponent,
  DetailsComponent,
} from "../../components/pages/productDetail";
import { FooterCompoment } from "../../components/pages/productList/Index";

export default function ProductDetail() {
  const { productDetail } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <CarouselComponent productDetail={productDetail} />

      <DetailsComponent productDetail={productDetail} />

      <FooterCompoment />
    </React.Fragment>
  );
}
