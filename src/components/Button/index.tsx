import styles from "./index.module.scss";
type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, ...props }: Props) => {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
};
export default Button;
