// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, color }) => {
  const buttonClass = `${styles.button} ${styles[color] || ''}`;

  return (
    <button className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;