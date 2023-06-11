import React, { useState, useEffect } from "react";
import { FaStar, FaMinus, FaPlus, FaCartPlus, FaTrash } from "react-icons/fa";
import styles from "./index.module.scss";
import productCardStyles from "../../shared/productCard/index.module.scss";
import { useGlobalContext } from "../../../../context";

export const DetailsComponent = ({ productDetail }) => {
  const { addStock, removeStock, favoriteStocks } = useGlobalContext();
  const { title, price, rating, description, id } = productDetail;

  const [count, setCount] = useState(0);

  const checkStock = favoriteStocks.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-between align-items-center">
        <div className={styles.title}>{title}</div>
        {/* <BiHeart className={styles.heartIcon} /> */}
      </div>
      <div className="d-flex align-items-center">
        <div className={productCardStyles.sold}>{rating.count} sold</div>
        <FaStar className={styles.starIcon} />
        <div className={styles.reviews}>
          {rating.rate} ({rating.rate * rating.count} reviews)
        </div>
      </div>
      <hr />
      <div className={styles.descriptionTitle}>Description</div>
      <div className={styles.descriptionText}>{description}</div>

      {/* SIZE OPTIONS */}
      <div className="d-flex justify-content-between flex-wrap">
        {[{ title: "size", options: ["s", "m", "l"] }].map(
          ({ title, options }, index) => {
            return (
              <div key={title} className={styles.options}>
                <div className={styles.optionsTitle}>{title}</div>
                <div className="d-flex justify-content-between">
                  {options.map((item) => {
                    return (
                      <div className={styles.option} key={item}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="d-flex align-items-center">
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.quantityBox}>
          <FaMinus
            style={{
              cursor: "pointer",
              pointerEvents: count ? "auto" : "none",
            }}
            onClick={() => setCount(count - 1)}
          />
          <div className="">{count}</div>
          <FaPlus
            style={{ cursor: "pointer" }}
            onClick={() => setCount(count + 1)}
          />
        </div>
      </div>

      <hr />
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-sm-4 mb-5 pb-5">
        <div className="">
          <div className={styles.priceText}>Total price</div>
          <div className={styles.price}>${price}</div>
        </div>
        {!checkStock ? (
          <div
            className={styles.priceBtn}
            onClick={() => addStock(productDetail)}
          >
            <FaCartPlus />
            <div className={styles}>Add to Favorite</div>
          </div>
        ) : (
          <div
            onClick={() => removeStock(id)}
            className={styles.priceBtn}
            style={{ background: "red" }}
          >
            <FaTrash />
            <div className={styles}>Remove Item</div>
          </div>
        )}
      </div>
    </div>
  );
};

export const CarouselComponent = ({ productDetail }) => {
  const { image } = productDetail;

  return (
    <div
      className={styles.carouselImg}
      style={{ backgroundImage: `url('${image}')` }}
    ></div>
  );
};
