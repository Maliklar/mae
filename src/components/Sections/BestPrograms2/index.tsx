import Image from "next/image";
import styles from "./index.module.scss";
import Hero2 from "@/assets/images/hero-2.png";
import Tag from "@/components/Tag";
import { GrDiamond } from "react-icons/gr";
import BadgeCard from "@/components/Cards/BadgeCard";
const BestPrograms2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.start}>
        <Image
          src={Hero2.src}
          fill
          objectFit="contain"
          style={{
            objectFit: "contain",
          }}
          alt="EAT"
        />
      </div>
      <div className={styles.end}>
        <h2 className={styles.h2}>
          <Tag Icon={GrDiamond} />
          Our Best Programs
        </h2>
        <p className={styles.p}>
          Always take care of your health starting from the food menu that you
          consume every day
        </p>

        <div className={styles.cardsContainer}>
          <BadgeCard
            title="Healthy Recipe"
            subTitle="Healthier Recipes, from food & nutrition experts"
            Icon={GrDiamond}
          />
          <BadgeCard
            title="Healthy Recipe"
            subTitle="Healthier Recipes, from food & nutrition experts"
            Icon={GrDiamond}
          />
          <BadgeCard
            title="Healthy Recipe"
            subTitle="Healthier Recipes, from food & nutrition experts"
            Icon={GrDiamond}
          />
          <BadgeCard
            title="Healthy Recipe"
            subTitle="Healthier Recipes, from food & nutrition experts"
            Icon={GrDiamond}
          />
        </div>
      </div>
    </section>
  );
};
export default BestPrograms2;
