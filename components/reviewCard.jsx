import Image from "next/image";
import styles from "@styles/reviewCard.module.css";
import Rating from "./rating";

export default function ReviewCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.product}>
        <img
          src={data.product.image}
          alt={data.product.name}
          className={styles.image}
        />
        <div>
          <p>{data.product.name}</p>
          <p>{data.product.desc}</p>
        </div>
      </div>
      <div className={styles.review}>
        <div>
          <Rating value={data.star} />
          <span>{data.published_at || "2 hours ago"}</span>
        </div>
        <p>{data.comment}</p>
      </div>
      <div className={styles.user}>
        <Image
          src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        />
        <p className={styles.bold}>{data.user}</p>
        <p>{data.profile.join(", ")}</p>
      </div>
    </div>
  );
}
