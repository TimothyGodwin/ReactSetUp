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
      className={styles.input} // Use the generated class name
    />
  );
};

export default Input;
