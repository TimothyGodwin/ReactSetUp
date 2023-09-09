import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
