import Tag from "@/components/Tag";
import styles from "./index.module.scss";
import { IconType } from "react-icons";

type Props = {
  title: string;
  Icon: IconType;
};
const WideCard = ({ title, Icon }: Props) => {
  return (
    <li className={styles.container}>
      <Tag Icon={Icon} />
      {title}
    </li>
  );
};
export default WideCard;
