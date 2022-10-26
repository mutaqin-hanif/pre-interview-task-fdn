import Image from "next/image";
import styles from "@styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.list}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Awards</a>
            </li>

            <li>
              <a href="#">Newsletter</a>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/ic-fd.svg"
            width={155}
            height={30}
          />
          <p>
            Copyright &copy; 2015-2017 Female Daily Network &middot; All rights
            reserved
          </p>
        </div>
      </div>
      <div className={styles.footerRight}>
        <p>Download Our Mobile App</p>
        <div className={styles.download}>
          <Image
            src="https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/btn-app-store-badge.png"
            width={120}
            height={40}
          />
          <Image
            src="https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/icon/btn-google-play-badge.png"
            width={135}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
}
