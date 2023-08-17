"use client";
import Tag from "@/components/Tag";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsShield } from "react-icons/bs";
import { FaCrown, FaPlay } from "react-icons/fa";
import { GiCupcake, GiHotMeal } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import styles from "./index.module.scss";
const BestPrograms1 = () => {
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
      data-visible={visible}
      ref={sectionRef}
    >
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

export function isVisible(e: HTMLElement) {
  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
