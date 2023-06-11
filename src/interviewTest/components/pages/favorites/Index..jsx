import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import homeStyles from "../productList/index.module.scss";
import styles from "./index.module.scss";
import ProductCard from "../../shared/productCard/Index";
import { useNavigate } from "react-router-dom";

export const HeaderCompoment = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.header}
      style={{ padding: "calc(15*(100vw/428)) 0" }}
    >
      <div className={styles.container}>
        <FaArrowLeft className={styles.icon} onClick={() => navigate(-1)} />
        <div className={styles.title}>My Favorites</div>
      </div>
    </div>
  );
};

export const ProductListCompoment = ({ favorites }) => {
  return (
    <>
      <section
        className={homeStyles.MostPopularSection}
        style={{ marginBottom: "calc(95*(100vw/428))" }}
      >
        {favorites.length > 0 ? (
          favorites.map((props) => {
            return <ProductCard props={props} />;
          })
        ) : (
          <EmptyFavoriteFoundCompoment />
        )}
      </section>
      <div className="my-5"></div>
    </>
  );
};

const EmptyFavoriteFoundCompoment = () => {
  return (
    <div className="mx-auto">
      <div
        style={{ backgroundImage: 'url("/media/productlist/Frame (1).svg"' }}
        className={homeStyles.img}
      ></div>
      <div className={homeStyles.title}>Empty List</div>
      <div className={homeStyles.text}>Sorry, you Favorite list is emty.</div>
    </div>
  );
};
