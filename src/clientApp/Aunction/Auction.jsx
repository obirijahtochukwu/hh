import React from "react";
import { Layout } from "../sharedLayout/index";
import {
  RelatedProductsComponent,
  UserDetailsComponent,
} from "./components/Index";

export const Auction = () => {
  return (
    <Layout>
      <UserDetailsComponent />
      <RelatedProductsComponent />
    </Layout>
  );
};
