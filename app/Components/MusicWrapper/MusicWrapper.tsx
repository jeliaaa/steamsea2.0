"use client";
import { FC } from "react";
import styles from "./MusicWrapper.module.scss";

type Props = {
  cards?: JSX.Element[];  
  name?: string;          
};

const MusicWrapper: FC<Props> = ({ cards = [], name = "" }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.wrapperContainer}>
        <div className={styles.content}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicWrapper;
