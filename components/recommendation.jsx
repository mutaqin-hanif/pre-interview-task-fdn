import styles from "@styles/recommendation.module.css";
import TrendingWeek from "./trendingWeek";

export default function Recommendation({}) {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h3 className={styles.title}>
          Looking for products that are just simply perfect for you?
        </h3>
        <p className={styles.subtitle}>
          Here are some products that we believe match your skin, hair, and
          body! Have we mentioned that they solve your concerns too?
        </p>
        <button className={styles.button}>See My Matches</button>
      </div>
      <div className={styles.product}>
        {Array.from({ length: 3 }, (_, i) => {
          return <TrendingWeek key={i} matches={true} />;
        })}
      </div>
    </div>
  );
}
