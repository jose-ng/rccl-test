import styles from "./Header.module.scss";
interface Props {
  totalCardItems: number;
}
function Header({ totalCardItems }: Props) {
  return (
    <h1 className={styles["Header-Title"]}>
      All Cruise serarch Results ({totalCardItems})
    </h1>
  );
}

export default Header;
