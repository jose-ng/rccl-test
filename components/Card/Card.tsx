import Image from "next/image";
import React from "react";
import styles from "./Card.module.scss";

function Card({ data }: any) {
  return (
    <React.Fragment>
      <div className={styles["Card"]}>
        <div className={styles["Card-Image"]}>
          <Image
            src={data.image}
            width="500"
            height="100"
            alt="Picture of the author"
          />
        </div>
        <div className={styles["Card-Body"]}>
          <p className={styles["Card-Subheading"]}>
            {data.numberNights} NIGTHS
          </p>
          <h3 className={styles["Card-Heading"]}>{data.name}</h3>
          <p>{data.shipName} </p>
          <p>
            <b>ROUNDTRIP FROM: </b>
            <span>{data.roundTrip} </span>
          </p>
          <p>
            <b>VISITING: </b>
            <span>{data.visiting.join(" ")}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
