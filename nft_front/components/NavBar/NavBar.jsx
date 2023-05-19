import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Website</title>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <nav className={styles.navbar}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
           
          </li>
          <li className={styles.navbarItem}>
         
          </li>
        </ul>
      </nav>
      <div className={styles.background}>
        <header className={styles.header}>
          <h1>Next.js Website</h1>
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <p>&copy; 2023 Next.js Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default NavBar;