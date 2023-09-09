import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>My App</h1>
        </div>
        
        <ul className={styles['nav-links']}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
