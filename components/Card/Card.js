import Image from "next/image";
import React from "react";
import styles from "./Card.module.scss";

function Card({ item }) {
  return (
    <React.Fragment>
      <div className={styles["Card"]}>
        <div className={styles["Card-Image"]}>
          <Image
            src={item.image}
            width="500"
            height="100"
            alt="Picture of the author"
          />
        </div>
        <div className={styles["Card-Body"]}>
          <p className={styles["Card-Subheading"]}>
            {item.numberNights} NIGTHS
          </p>
          <h3 className={styles["Card-Heading"]}>{item.name}</h3>
          <p>{item.shipName} </p>
          <p>
            <b>ROUNDTRIP FROM: </b>
            <span >{item.roundTrip} </span>
          </p>
          <p>
            <b>VISITING: </b>
            <span >
              {item.visiting.join(" ")}
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
