import { IconType } from "@react-icons/all-files";
import styles from "./index.module.scss";

type Props = {
  Icon: IconType;
};
const Tag = ({ Icon }: Props) => {
  return (
    <span className={styles.container}>
      <Icon fontSize="2.5rem" />
    </span>
  );
};
export default Tag;
