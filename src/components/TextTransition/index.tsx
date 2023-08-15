import styles from "./index.module.scss";
type Props = {
  strings: string[];
};
const TextTransition = ({ strings }: Props) => {
  if (strings.length > 3)
    throw Error("Text Transition requires only three strings");
  return (
    <span className={styles.container}>
      {strings.map((string, index) => (
        <span className={styles.item} key={string + index}>
          {string}
        </span>
      ))}
    </span>
  );
};

export default TextTransition;
