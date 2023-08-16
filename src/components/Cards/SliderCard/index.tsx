"use client";

import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { IconType } from "react-icons";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
type Props = {
  items: {
    quote: string;
    author: string;
  }[];

  Icon: IconType;
};

type ItemStateType = {
  quote: string;
  author: string;
  active: boolean;
};
const SliderCard = ({ items: initialItems, Icon }: Props) => {
  const [items, setItems] = useState<ItemStateType[]>(
    (initialItems as ItemStateType[]).map((item, index) => {
      if (index === 0) item.active = true;
      else item.active = false;
      return item;
    })
  );
  const [index, setIndex] = useState(0);
  const [lastClick, setLastClick] = useState(0);

  const nextClickHandler = () => {
    setIndex((i) => {
      if (i + 1 < items.length) {
        return i + 1;
      }
      return i;
    });
    setLastClick(1);
  };
  const prevClickHandler = () => {
    setIndex((i) => {
      if (i - 1 >= 0) {
        return i - 1;
      }
      return i;
    });
    setLastClick(0);
  };

  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <Tag Icon={Icon} />
      </span>
      <div className={styles.slider}>
        {items.map((item, i) => (
          <CSSTransition
            in={i === index}
            unmountOnExit
            mountOnEnter
            timeout={300}
            key={i}
          >
            {(state) => {
              return (
                <div
                  className={styles.slide}
                  data-state={state}
                  data-direction={lastClick}
                  key={item.author + i}
                >
                  <p className={styles.p}>{item.quote}</p>
                  <strong className={styles.strong}>Healthy Recipe</strong>
                  <small className={styles.small}>{item.author}</small>
                </div>
              );
            }}
          </CSSTransition>
        ))}

        <div className={styles.controls}>
          <button
            className={styles.button}
            title="Go Left"
            onClick={prevClickHandler}
          >
            <AiOutlineLeft />
          </button>
          <button
            className={styles.button}
            title="Go Right"
            onClick={nextClickHandler}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SliderCard;
