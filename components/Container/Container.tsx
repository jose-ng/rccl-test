
import styles from "./Container.module.scss";
function Container({ children }: any) {
  return (
    <main>
      <div className={styles["Container"]}>{children}</div>
    </main>
  );
}

export default Container;
