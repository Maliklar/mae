import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { FaPen } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import WideCard from "@/components/Cards/WideCard";
import RoundCard from "@/components/Cards/RoundCard";
const BestPrograms3 = () => {
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
            <button className={styles.button} title="Go Left">
              <AiOutlineLeft />
            </button>
            <button className={styles.button} title="Go Right">
              <AiOutlineRight />
            </button>
          </div>

          <div className={styles.swiper}>
            <div className={styles.swiperItem}>
              <RoundCard title="Red Onions With Chopped Cabbage" src="url" />
              <RoundCard title="Red Onions With Chopped Cabbage" src="url" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestPrograms3;
