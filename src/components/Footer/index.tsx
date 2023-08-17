import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.start}>
        <Image
          src={Logo.src}
          height={50}
          width={100}
          alt="Organization Logo"
          style={{
            objectFit: "contain",
          }}
        />
        <p className={styles.p}>
          Always take care of your health starting from the food menu that you
          consume every day
        </p>
      </div>
      <div className={styles.end}>
        <div className={styles.section}>
          <strong>About</strong>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="#">About us</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#">News & Articles</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <strong>Support</strong>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="#">Help Center</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#">COVID-9</Link>
            </li>
          </ul>
        </div>{" "}
        <div className={styles.section}>
          <strong>Resources</strong>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="#">FAQ </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#">How it works</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#">Partners</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <strong>Company</strong>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="#">FAQ</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#">How it works</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="#">Partners</Link>
            </li>
          </ul>
        </div>{" "}
      </div>
    </footer>
  );
};
export default Footer;
