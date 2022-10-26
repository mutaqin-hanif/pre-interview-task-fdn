import Image from "next/image";
import styles from "@styles/popularCard.module.css";
import Woman from "@icons/woman";
import ChatBubble from "@icons/chatBubble";
import ListBullet from "@icons/listBullet";

export default function PopularCard() {
  return (
    <div className={styles.card}>
      <Image
        src="https://image.femaledaily.com/dyn/80/images/user-pics/8cfa98979828b03949df998669bcca01.jpg"
        width={125}
        height={125}
        style={{ borderRadius: "100%" }}
      />
      <p>Embrace the Curl</p>
      <div className={styles.operation}>
        <a href="#">
          <Woman width="1.2rem" color="#00000" />
        </a>
        <a href="#">
          <ChatBubble />
        </a>
        <a href="#">
          <ListBullet />
        </a>
      </div>
      <span>May our curls pop and never stop!</span>
    </div>
  );
}
