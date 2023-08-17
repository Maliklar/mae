"use client";
import Hero2 from "@/assets/images/hero-2.png";
import BadgeCard from "@/components/Cards/BadgeCard";
import Tag from "@/components/Tag";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GrDiamond } from "react-icons/gr";
import { isVisible } from "../BestPrograms1";
import styles from "./index.module.scss";
const BestPrograms2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Clearly not the optimal solution
    const interval = setInterval(() => {
      if (!sectionRef.current) return;

      if (isVisible(sectionRef.current)) {
        setVisible(true);
        clearInterval(interval);
      }
    });
  }, []);
  return (
    <section
      className={styles.container}
      ref={sectionRef}
      data-visible={visible}
    >
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
