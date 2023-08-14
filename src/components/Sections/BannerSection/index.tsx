import Image from "next/image";
import styles from "./index.module.scss";
import HealthBrowLogo from "@/assets/images/healthrow-logo.svg";
import HerbLifeLogo from "@/assets/images/herblife-logo.svg";

const BannerSection = () => {
  return (
    <div className={styles.container}>
      <HealthBrowLogo />
      <HerbLifeLogo />
    </div>
  );
};

export default BannerSection;
