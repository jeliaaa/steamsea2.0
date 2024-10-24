'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";

export default function Home() {

  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') window.addEventListener('resize', handleResize);

    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('resize', handleResize);
    };
  }, [window]);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.bannerWrapper}>
          {
            screenWidth > 768 ?
              <Image src={"/mtavari.webp"} alt={"main banner"} width={1200} height={600} className={styles.banner} /> :
              <Image src={"/mtavari.webp"} alt={"mobile banner"} width={200} height={0} className={styles.banner} />
          }
        </div>
        <div className={styles.description}>
          <div className={styles.issue}>
            <h2 className={styles.title}>რა არის პრობლემა?</h2>
            <p className={styles.text}>არალეგალური თევზაობა გვერდს უვლის კანონებს და ნორმებს რაც სახელმწიფო ორგანოებს საშუალებას არ აძლევს აკონტროლონ და დაიცვან თევზის რესურსები შედეგად საფრთხე ექმნება მსოფლიო თევზჭერის მდგრადობას და საკვების მიწოდებას და ნადგურდება ზღვის ეკოსისტემა</p>
          </div>
          <div className={styles.issue}>
            <h2 className={styles.title}>როგორ ვაგვარებთ?</h2>
            <p className={styles.text}>NetWatch მიზნად ისახავს უკანონო თევზჭერის შეჩერებას და ოკეანეების დაცვას. სისტემა აღჭურვილია სენსორებით, რაც უზრუნველყოფს სწრაფ და ეფექტურ რეაგირებას უკანონო მეთოდებზე. ჩვენი მისიაა, წყლის ბინადრები უსაფრთხოდ იყვნენ და ოკეანეებიც დაცული იყოს მომავალი თაობებისთვის.</p>
          </div>
        </div>
      </div>
    </div>

  );
}
