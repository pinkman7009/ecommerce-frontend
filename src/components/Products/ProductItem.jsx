import { useState, useEffect } from "react";
import * as styles from "./AllProducts.module.css";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

const ProductItem = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const {
    img_url,
    product_name,
    tag,
    amount,
    brand,
    fabric_style,
    gender,
    size,
    color,
    sleeve,
    neck,
    type,
    ratings,
    discount,
  } = product;

  useEffect(() => {
    console.log({ liked });
  }, [liked]);

  const discountedAmount = +amount - (amount * discount) / 100;
  return (
    <div className={styles.productItem}>
      <div className={styles.imgContainer}>
        <img src={img_url} className={styles.productImg} />

        <div className={styles.ratings}>
          <FaStar />
          {ratings}
        </div>
      </div>
      <div className={styles.tag}>{tag.toUpperCase()}</div>

      <div className={styles.productDetails}>
        <div className={styles.detailsHeader}>
          <div>
            <p className={styles.title}>{brand}</p>
            <p className={styles.subtitle}>{product_name}</p>
          </div>
          <button
            onClick={() => {
              setLiked((liked) => !liked);
            }}
          >
            {liked ? <FaHeart className={styles.liked} /> : <FaRegHeart />}
          </button>
        </div>

        <div className={styles.value}>
          <p className={styles.amount}>₹{discountedAmount}</p>
          <p>
            MRP: ₹ {amount}{" "}
            <span className={styles.discount}>(Save {discount}%)</span>
          </p>
        </div>

        <div className={styles.info}>₹{discountedAmount} for Tribe Members</div>

        <div className={styles.fabricButton}>
          {fabric_style.map((fabric, index) => (
            <p key={fabric}>
              {fabric.toUpperCase()}
              {index !== fabric_style.length - 1 ? "," : ""}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
