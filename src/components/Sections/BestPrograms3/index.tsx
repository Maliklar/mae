"use client";

import RoundCard from "@/components/Cards/RoundCard";
import WideCard from "@/components/Cards/WideCard";
import Tag from "@/components/Tag";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
const BestPrograms3 = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const rightClickHandler = () => {
    setDirection(0);

    setIndex((i) => {
      if (i + 1 < 6) {
        return i + 1;
      }
      return i;
    });
  };

  const leftClickHandler = () => {
    setDirection(1);

    setIndex((i) => {
      if (i - 1 >= 0) {
        return i - 1;
      }

      return i;
    });
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>
        <Tag Icon={FaPen} />
        Our Best Programs
      </h2>

      <div className={styles.content}>
        <div className={styles.start}>
          <p className={styles.p}>
            Always take care of your health starting from the food menu that you
            consume every day
          </p>
          <ul className={styles.cardsContainer}>
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
            <WideCard title="Healthy Recipe" Icon={FaPen} />
          </ul>
        </div>
        <div className={styles.end}>
          <div className={styles.controls}>
            <button
              className={styles.button}
              title="Go Left"
              onClick={leftClickHandler}
            >
              <AiOutlineLeft />
            </button>
            <button
              className={styles.button}
              title="Go Right"
              onClick={rightClickHandler}
            >
              <AiOutlineRight />
            </button>
          </div>

          <div className={styles.swiper}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <CSSTransition
                key={i}
                timeout={300}
                in={index === i}
                unmountOnExit
                mountOnEnter
              >
                {(state) => (
                  <div
                    className={styles.swiperItem}
                    data-state={state}
                    data-direction={direction}
                  >
                    <RoundCard
                      title="Red Onions With Chopped Cabbage"
                      src="url"
                    />
                    <RoundCard
                      title="Red Onions With Chopped Cabbage"
                      src="url"
                    />
                  </div>
                )}
              </CSSTransition>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.shadow} />
    </section>
  );
};
export default BestPrograms3;
