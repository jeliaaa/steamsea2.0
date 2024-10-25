'use client';

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
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.bannerWrapper}>
          {
            screenWidth > 768 ?
              <Image src={"/ratiiii.png"} alt={"main banner"} width={1000} height={300} className={styles.banner} /> :
              <Image src={"/ratiiii.png"} alt={"mobile banner"} width={200} height={0} className={styles.banner} />
          }
        </div>

        {/* Video Section */}
        

        <div className={styles.description}>
          <div className={styles.issue}>
            <h2 className={styles.title}>რა არის პრობლემა?</h2>
            <p className={styles.text}>პლასტმასის დაბინძურება საკმაოდ სერიოზულ პრონბლემას წარმოადგენს წყლის მასებისთვის, მსოფლიო ეკონომიკას ამასთან ბრძოლა დაახლოებით $13 მილიარდი უჯდებათ, აქედან გამომდინარე, ეს პრობლემა თანაბრად სადარდებელია ეკოაქტივისტებისთვისაც და ბიზნესმენებისთვისაც. </p>
          </div>
          <div className={styles.issue}>
            <h2 className={styles.title}>როგორ ვაგვარებთ?</h2>
            <p className={styles.text}>ამ პრობლემას ჩვენი ავტონომური გემი აგვარებს, რომელიც ნაგავს აგროვებს. დრონის საშუალებით იგი ახდენს ტბაში ნაგვის დეტექციას და აწოდებს ინფორმაციას ნავს, ნავი კი ავტოპილოტის საშუალებით მიდის ამ ადგილას და აგროვებს ნარჩენებს.</p>
          </div>
        </div>
      </div>

      <div className={styles.videoWrapper}>
          <video width="80%" controls>
            <source src="/videoo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}
