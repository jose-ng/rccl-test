import CardData from "../../interfaces/cardData";
import styles from "./CardList.module.scss";
interface Props {
  loading: boolean;
  error: string | undefined;
  totalCardItems: number;
  onLoading: () => JSX.Element;
  onEmptyCards: () => JSX.Element;
  render: (item: CardData) => JSX.Element;
  onError: () => JSX.Element;
  cardItems: CardData[];
}
function CardList(props: Props) {
  const renderFunc = props.render;

  return (
    <section className={styles["CardList"]}>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalCardItems && props.onEmptyCards()}
      {props.cardItems.map(renderFunc)}
    </section>
  );
}

export default CardList;
