import Card from "../components/Card/Card";
import useInfoCards from "../hooks/useInfoCards";
import CardError from "../components/CardError/CardError";
import CardLoading from "../components/CardLoading/CardLoading";
import EmptyCards from "../components/EmptyCards/EmptyCards";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

export default function Home() {
  const { cardItems, loading, error, totalCardItems } = useInfoCards();
  return (
    <Container>
      <Header totalCardItems={totalCardItems}/>
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
    </Container>
  );
}
