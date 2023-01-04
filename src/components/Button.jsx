import React from 'react';
import styles from './Button.module.css';

function Button({value, handler}) {
  return (
    <span className={ value == "C" || value == "=" ? `${styles.btn} ${styles.res}` : `${styles.btn}`} onClick={()=>handler(value)}>
      {value}
    </span>
  )
}

export default Button