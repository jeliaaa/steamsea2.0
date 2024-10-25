"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Aside from "../Components/Aside/Aside";
import MusicWrapper from "../Components/MusicWrapper/MusicWrapper";
import TeammateBox from "../Components/TeammateBox/TeammateBox";
import Icon from "../Components/Icon/Icon";
export default function Home() {
  const teammateCards = [
    <TeammateBox
      key="1"
      name="რატი დუმბაძე"
      image="/rati.jpg"
      role="Front End"
    />,
    <TeammateBox
      key="2"
      name="ალექსანდრე ჯელია"
      image="/aleks.jpg"
      role="Backend Developer / Electric Engineer"
    />,
    <TeammateBox
      key="3"
      name="ნიკა აბულაძე"
      image="/nikka.jpg"
      role="Mechanical Engineer"
    />
  ];

  return (
    <div className={styles.page}>
      <Aside />
      <div className={styles.content}>
        <MusicWrapper cards={teammateCards} name="ჩვენი გუნდი" />
        {/* <div className={styles.project}>
          <p className={styles.projectInfo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga atque illo numquam id ratione minus accusantium distinctio libero, autem quos delectus ipsa molestiae dignissimos beatae? Placeat dolor vero repudiandae necessitatibus.</p>
          
        </div> */}
      </div>
    </div>
  );
}
