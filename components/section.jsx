import styles from "@styles/section.module.css";

export default function Section({ children, title, subtitle }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <a href="#">See more &gt;</a>
      </div>
      <div>{children}</div>
    </section>
  );
}
