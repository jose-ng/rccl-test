import styles from "../styles/Home.module.scss";
import Card from "../components/Card/Card";
import useInfoCards from "../hooks/useInfoCards";
import CardError from "../components/CardError/CardError";
import CardLoading from "../components/CardLoading/CardLoading";
import EmptyCards from "../components/EmptyCards/EmptyCards";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";

export default function Home() {
  const { cardItems, loading, error, totalCardItems } = useInfoCards();
  return (
    <main className={styles["Container"]}>
      <Header />
      <CardList
        error={error}
        loading={loading}
        totalCardItems={totalCardItems}
        cardItems={cardItems}
        onError={() => <CardError msg={error} />}
        onLoading={() => <CardLoading />}
        onEmptyCards={() => <EmptyCards />}
        render={(item: any) => <Card key={item.text} data={item} />}
      ></CardList>
    </main>
  );
}
