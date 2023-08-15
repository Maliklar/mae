"use client";
import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { FaPen } from "react-icons/fa";
import Hero from "@/assets/images/hero-3.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import SliderCard from "@/components/Cards/SliderCard";
import { useState } from "react";
const BestPrograms4 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.start}>
          <Image
            src={Hero.src}
            fill
            style={{
              objectFit: "contain",
            }}
            alt="Section 4"
          />
        </div>
        <div className={styles.end}>
          <h2 className={styles.h2}>
            <Tag Icon={FaPen} />
            Our Best Programs
          </h2>
          <p className={styles.p}>
            Always take care of your health starting from the food menu that you
            consume every day
          </p>
          <SliderCard items={ITEMS} Icon={FaPen} />
        </div>
      </div>
    </section>
  );
};
export default BestPrograms4;

const ITEMS = [
  {
    quote:
      "Healthier Recipes, from food & nutrition experts Always take care of your health starting from the food menu that you consume every day ealthier Recipes, from food & nutrition experts Always take care of your health starting ",
    author: "Freelancer",
  },
  {
    quote:
      "Healthier Recipes, from food & nutrition experts Always take care of your health starting from the food menu that you consume every day ealthier Recipes, from food & nutrition experts Always take care of your health starting ",
    author: "Freelancer",
  },
  {
    quote:
      "Healthier Recipes, from food & nutrition experts Always take care of your health starting from the food menu that you consume every day ealthier Recipes, from food & nutrition experts Always take care of your health starting ",
    author: "Freelancer",
  },
  {
    quote:
      "Healthier Recipes, from food & nutrition experts Always take care of your health starting from the food menu that you consume every day ealthier Recipes, from food & nutrition experts Always take care of your health starting ",
    author: "Freelancer",
  },
  {
    quote:
      "Healthier Recipes, from food & nutrition experts Always take care of your health starting from the food menu that you consume every day ealthier Recipes, from food & nutrition experts Always take care of your health starting ",
    author: "Freelancer",
  },
  {
    quote:
      "Healthier Recipes, from food & nutrition experts Always take care of your health starting from the food menu that you consume every day ealthier Recipes, from food & nutrition experts Always take care of your health starting ",
    author: "Freelancer",
  },
];
