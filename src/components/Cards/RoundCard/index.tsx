import Image from "next/image";
import styles from "./index.module.scss";
import Dish from "@/assets/images/dish.png";
import Button from "@/components/Button";
type Props = {
  title: string;
  src: string;
};
const RoundCard = ({ title, src }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={Dish.src}
          fill
          objectFit="contain"
          style={{
            objectFit: "contain",
          }}
          alt={title}
        />
      </div>
      <strong>{title}</strong>
      <Button> Try Now</Button>
    </div>
  );
};
export default RoundCard;
