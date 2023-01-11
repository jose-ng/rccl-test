import styles from "./Container.module.scss";
interface Props {
  children?: React.ReactNode; 
}
function Container({ children }: Props) {
  return (
    <main>
      <div className={styles["Container"]}>{children}</div>
    </main>
  );
}

export default Container;
