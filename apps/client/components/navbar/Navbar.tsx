import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>Yaic</h1>
      <div>
        <input type='search' placeholder='Search' />
      </div>
      <div className={styles.links}>
        <Link href='/signin'>Sign In</Link>
        <Link href='/signup'>Sign Up</Link>
      </div>
    </nav>
  );
}
