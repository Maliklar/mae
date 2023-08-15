import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { IconType } from "react-icons";
type Props = {
  title: string;
  subTitle: string;
  Icon: IconType;
};
const BadgeCard = ({ title, subTitle, Icon }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        <Tag Icon={Icon} />
      </span>
      <div className={styles.content}>
        <h4>{title}</h4>
        <small>{subTitle}</small>
      </div>
    </div>
  );
};
export default BadgeCard;
