/**
 * Render props consists of delegating what a component is going to render to another component,
 * most of the time, to a parent in the component tree. In general we use render props when we want
 * to give the consumer of our component as much freedom as possible to define what it is going to render,
 * without necessarily tying it to a specific template.
 */
import type { NextPage } from "next";
import Card from "../components/Card/Card";
import useInfoCards from "../hooks/useInfoCards";
import CardError from "../components/CardError/CardError";
import CardLoading from "../components/CardLoading/CardLoading";
import EmptyCards from "../components/EmptyCards/EmptyCards";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import CardData from "../interfaces/cardData";

const Home: NextPage = () => {
  const { cardItems, loading, error, totalCardItems } = useInfoCards();
  return (
    <Container>
      <Header totalCardItems={totalCardItems} />
      <CardList
        error={error}
        loading={loading}
        totalCardItems={totalCardItems}
        cardItems={cardItems}
        onError={() => <CardError msg={error} />}
        onLoading={() => <CardLoading />}
        onEmptyCards={() => <EmptyCards />}
        render={(item: CardData) => <Card key={item.name} data={item} />}
      ></CardList>
    </Container>
  );
};
export default Home;
