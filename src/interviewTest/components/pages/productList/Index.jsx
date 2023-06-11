import React from "react";
import styles from "./index.module.scss";
import SearchInput from "../../shared/searchInput/Index";
import ProductCard from "../../shared/productCard/Index";
import { navs } from "../data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../context";

export const HeaderCompoment = ({ props }) => {
  const { inputValue, filteredProducts } = props;

  return (
    <>
      <SearchInput props={props} />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className={styles.SpecialOfferTitle}>
          Results for “{inputValue ? inputValue : "All"}”
        </div>
        <div className={styles.SpecialOfferTxt}>
          {filteredProducts.length} found
        </div>
      </div>
    </>
  );
};

export const ProductListCompoment = ({ props }) => {
  const { filteredProducts } = props;

  return (
    <div
      style={{ marginBottom: "calc(93*(100vw/390))" }}
      className={filteredProducts.length === 0 ? "d-none" : ""}
    >
      <section className={styles.MostPopularSection}>
        {filteredProducts.map((props, index) => {
          if (index < 10) {
            return <ProductCard props={props} />;
          }
          return null;
        })}
      </section>
      <div className="my-5"></div>
    </div>
  );
};

export const NoProductFoundCompoment = ({ props }) => {
  const { inputValue, filteredProducts } = props;

  return (
    <div className={filteredProducts.length != 0 ? "d-none" : ""}>
      <div
        style={{ backgroundImage: 'url("/media/productlist/Frame (1).svg"' }}
        className={styles.img}
      ></div>
      <div className={styles.title}>Not Found</div>
      <div className={styles.text}>
        Sorry, the keyword you entered cannot be found, please check again or
        search with another keyword.
      </div>
    </div>
  );
};

export const FooterCompoment = () => {
  const { productDetail } = useGlobalContext();

  return (
    <div className={styles.FooterCompoment}>
      {navs.map(({ name, icon, url }, index) => {
        return (
          <Link
            to={
              name === "stock detail" && productDetail.id
                ? url
                : name !== "stock detail"
                ? url
                : window.location.pathname
            }
            key={index}
            className={styles.footer}
          >
            <div className={styles.icon}>{icon}</div>
            <div className={styles.name}>{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
