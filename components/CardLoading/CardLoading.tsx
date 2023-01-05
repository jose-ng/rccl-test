import styles from "./Loader.module.scss";
function CardLoading() {
  return (
    <div className={styles["Container"]}>
      <div className={styles["Loader"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default CardLoading;
