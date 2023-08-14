import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import styles from "./index.module.scss";
import Button from "../Button";

const Navigation = () => {
  return (
    <header className={styles.container}>
      <Image
        src={Logo.src}
        objectFit="contain"
        style={{
          objectFit: "contain",
        }}
        height={40}
        width={100}
        alt="ORganization"
      />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>Programs</li>
          <li className={styles.li}>Services</li>
          <li className={styles.li}>News</li>
          <li className={styles.li}>About Us</li>
        </ul>
      </nav>

      <Button>{`Let’s Talk`}</Button>
    </header>
  );
};
export default Navigation;
