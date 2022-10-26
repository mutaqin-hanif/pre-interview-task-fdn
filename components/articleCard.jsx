import styles from "@styles/articleCard.module.css";

export default function ArticleCard({
  data: { title, author, image, published_at },
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <p>
        {author} | <span>{published_at}</span>
      </p>
    </div>
  );
}
