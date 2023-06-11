import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../context";

export default function ProductCard({ props }) {
  const { title, price, rating, image } = props;
  const { setProductDetail } = useGlobalContext();
  return (
    <Link
      to="/product-detail"
      onClick={() => setProductDetail(props)}
      style={{ textDecoration: "none" }}
      key={title}
      className={styles.MostPopularCard}
    >
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className={styles.cardImg}
      >
        <div className={styles.heartIcon}>
          <FaHeart />
        </div>
      </div>
      <div className={styles.cardTitle}>
        {title.substring(0, 15)}
        <span className="text-muted">...</span>
      </div>
      <div className={styles.cardFooter}>
        <FaStar className={styles.cardIcon} />
        <div className={styles.ratings}>{rating.rate}</div>
        <div className={styles.cardBar}></div>
        <div className={styles.sold}>{rating.count}</div>
      </div>
      <div className={styles.price}>${price}</div>
    </Link>
  );
}
