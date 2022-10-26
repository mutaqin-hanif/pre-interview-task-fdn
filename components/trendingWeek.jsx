import Image from "next/image";
import styles from "@styles/trendingWeek.module.css";
import Rating from "./rating";

export default function TrendingWeek({ matches = false }) {
  return (
    <div className={styles.card}>
      <Image
        src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
        width={150}
        height={220}
      />
      <p>Matches Skin Type</p>
      <div className={styles.rating}>
        <p>4.9</p>
        <Rating value={4.9} />
        <p>(7)</p>
      </div>
      <div>
        <p className={styles.bold}>Y.O.U Makeups</p>
        <p>Rouge Velvet Matte Lip Cream</p>
      </div>
    </div>
  );
}
