import Image from "next/image";
import styles from "./index.module.scss";
import HeroImage from "@/assets/images/hero.png";
import Button from "@/components/Button";

import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.start}>
        <h1 className={styles.h1}>
          Changing your <span>eating</span> habits
        </h1>
        <p className={styles.p}>
          Always take care of your health starting from the food menu that you
          consume every day
        </p>
        <div className={styles.actions}>
          <Button>Explore Menu</Button>
          <button className={styles.playButton}>
            <span className={styles.icon}>
              <FaPlay />
            </span>
            Watch Video
          </button>
        </div>
      </div>
      <div className={styles.end}>
        <span className={styles.imageContainer}>
          <Image
            src={HeroImage.src}
            fill
            objectFit="contain"
            style={{
              objectFit: "contain",
            }}
            alt="HERO"
          />
        </span>
      </div>
    </section>
  );
};
export default HeroSection;
