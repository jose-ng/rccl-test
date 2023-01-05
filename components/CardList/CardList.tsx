import styles from "./CardList.module.scss";

function CardList(props: any) {
  const renderFunc = props.children || props.render;
  
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
