import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { FaFlag } from "react-icons/fa";
import Button from "@/components/Button";
const FeaturedSection = () => {
  return (
    <section className={styles.container}>
      <Tag Icon={FaFlag} />
      <h2 className={styles.h2}>
        Get Start With <span>Eatly</span>
      </h2>
      <p className={styles.p}>
        Always take care of your health starting from the food menu that you
        consume every day
      </p>

      <Button>Get Started</Button>
    </section>
  );
};
export default FeaturedSection;
