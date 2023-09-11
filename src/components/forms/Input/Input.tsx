import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={styles.input + ` w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500`} 
    />
  );
};

export default Input;
