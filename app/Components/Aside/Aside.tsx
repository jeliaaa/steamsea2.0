"use client";

import React, { useState, useEffect } from 'react';
import styles from './Aside.module.scss';
import { useRouter, usePathname } from 'next/navigation';  
import Icon from '../Icon/Icon';
import MenuItem from '../MenuItem/MenuItem';

const AsideMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname(); 
  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('home');
    } else if (pathname.includes('/aboutPage')) {
      setActiveItem('about');
    }
  }, [pathname]);  

  const handleMenuItemClick = (name: string, route: string) => {
    setActiveItem(name);
    router.replace(route);
  };

  return (
    <div className={styles.aside}>
      <div className={styles.siderContent}>
        <div className={styles.logo}>
          <Icon width='124px' name={"FAZER"} isActive={false} onClick={() => { }} />
        </div>
        <div className={styles.menuItems}>
          <MenuItem
            name={"home"}
            isActive={activeItem === "home"}
            onClick={() => handleMenuItemClick("home", "/")}
          />
          <MenuItem
            name={"about"}
            isActive={activeItem === "about"}
            onClick={() => handleMenuItemClick("about", "/aboutPage")}
          />
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
