import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
 

<header className="bg-blue-500 text-white p-4">
<nav className="flex items-center justify-between">
  <h1 className="text-2xl font-semibold">
    <Link to="/">My App</Link>
   
  </h1>
  <ul className="flex space-x-4">
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/post">
              Post
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
  </nav>
  </header>
  );
};

export default Header;


