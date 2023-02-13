import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

const useWorkingIncrement = () => {
  const dispatch = useDispatch();
  return () => dispatch(increment());
};

const useNotWorkingIncrement = () => () => {
  const dispatch = useDispatch();
  return (argument) => dispatch(increment(argument));
}

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const workingIncrement = useWorkingIncrement();
  const notWorkingIncrement = useNotWorkingIncrement();

  const workingUsingNotWorkingIncrement = useNotWorkingIncrement()(1);

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        {/* <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button> */}

        <button
          className={styles.button}
          onClick={() => workingIncrement()}
        >
          Working Increment
        </button>
        <button
          className={styles.button}
          onClick={() => notWorkingIncrement()(1)}
        >
          Not Working Increment
        </button>

        <button
          className={styles.button}
          onClick={() => workingUsingNotWorkingIncrement()}
        >
          Working using the not Working Increment
        </button>
      </div>
    </div>
  );
}
