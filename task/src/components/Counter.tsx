import React, { useState } from 'react';
import styles from '../styles/Counter.module.css';
import Button from "./Button"

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className={styles.counter}>
      <h2>Counter: {count}</h2>
      <div className={styles.buttonContainer}>
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};

export default Counter;