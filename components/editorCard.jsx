import styles from "@styles/editorCard.module.css";
import Image from "next/image";
import Rating from "./rating";

export default function EditorCard({ editor, role, product }) {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <Image
          src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        />
        <div className={styles.text}>
          <p>{editor}</p>
          <p>{role}</p>
        </div>
      </div>
      <div className={styles.product}>
        <div style={{ marginInline: "auto", width: "fit-content" }}>
          <Image src={product.image} width={150} height={150} />
        </div>
        <div className={styles.rating}>
          <p className={styles.bold}>{product.rating}</p>
          <Rating value={product.rating} />
          <p>(7)</p>
        </div>
        <p className={styles.bold}>{product.name}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
