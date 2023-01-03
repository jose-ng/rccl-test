import styles from "../styles/Home.module.scss";
import Card from "../components/Card/Card";
import data from "../data/data";

export default function Home() {
  return (
    <main className={styles["Container"]}>
      <h1 className={styles["Container-Title"]}>
        All Cruise serarch Results (571)
      </h1>
      <section className={styles["Container-Cards"]}>
        {data.map((item: any, index: any) => (
          <Card key={index} item={item} />
        ))}
      </section>
    </main>
  );
}
