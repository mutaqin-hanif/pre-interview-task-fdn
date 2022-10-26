import Hamburger from "@icons/hamburger";
import Image from "next/image";
import styles from "@styles/header.module.css";
import Search from "@icons/search";
import User from "@icons/user";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Hamburger />
        <Image
          src="https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg"
          width={155}
          height={30}
        />
        <div className={styles.iconned}>
          <span>
            <Search />
          </span>
          <input placeholder="search products, articles, topics, brands, etc" />
        </div>
        <button className={styles.button}>
          <User />
          LOGIN/SIGNUP
        </button>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">SKINCARE</a>
          </li>
          <li>
            <a href="#">MAKE UP</a>
          </li>
          <li>
            <a href="#">BODY</a>
          </li>
          <li>
            <a href="#">HAIR</a>
          </li>
          <li>
            <a href="#">FRAGRANCE</a>
          </li>
          <li>
            <a href="#">NAILS</a>
          </li>
          <li>
            <a href="#">TOOLS</a>
          </li>
          <li>
            <a href="#">BRANDS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
