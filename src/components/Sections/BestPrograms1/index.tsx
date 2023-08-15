import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { FaCrown, FaPlay } from "react-icons/fa";
import { GiCupcake, GiHotMeal } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { BsShield } from "react-icons/bs";
import Link from "next/link";
const BestPrograms1 = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>
        <Tag Icon={FaCrown} /> Our Best Programs
      </h2>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderItem}>
          <Tag Icon={GiCupcake} />
          <h4>Healthy Recipe</h4>
          <p>Healthier Recipes, from food & nutrition experts</p>
          <Link href="#" className={styles.learnMore}>
            Learn More <FaPlay />
          </Link>
        </div>
        <div className={styles.sliderItem}>
          <Tag Icon={GiHotMeal} />
          <h4>Healthy Recipe</h4>
          <p>Healthier Recipes, from food & nutrition experts</p>
          <Link href="#" className={styles.learnMore}>
            Learn More <FaPlay />
          </Link>
        </div>
        <div className={styles.sliderItem}>
          <Tag Icon={ImSpoonKnife} />
          <h4>Healthy Recipe</h4>
          <p>Healthier Recipes, from food & nutrition experts</p>
          <Link href="#" className={styles.learnMore}>
            Learn More <FaPlay />
          </Link>
        </div>
        <div className={styles.sliderItem}>
          <Tag Icon={BsShield} />
          <h4>Healthy Recipe</h4>
          <p>Healthier Recipes, from food & nutrition experts</p>
          <Link href="#" className={styles.learnMore}>
            Learn More <FaPlay />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BestPrograms1;
