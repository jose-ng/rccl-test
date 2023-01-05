import styles from "./Header.module.scss";

function Header(props: any) {
  return (
    <h1 className={styles["Header-Title"]}>
      All Cruise serarch Results ({props.totalCardItems})
    </h1>
  );
}

export default Header;
