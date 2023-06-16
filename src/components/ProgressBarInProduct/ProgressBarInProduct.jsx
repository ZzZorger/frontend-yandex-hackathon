import { useState } from 'react';
import style from './ProgressBarInProduct.module.css';

export default function ProgressBarInProduct({ fullCount }) {
  const [progress, setProgress] = useState(1);

  const Increment = (event) => {
    event.stopPropagation();
    if (progress < 4) {
      setProgress(progress + 1);
    }
  };

  const Decrement = (event) => {
    event.stopPropagation();
    if (progress > 1) {
      setProgress(progress - 1);
    }
  };

  const getColor = () => {
    if (progress === 1) {
      return 'rgba(42, 173, 46, 0.25)';
    }
    if (progress === 2) {
      return 'rgba(42, 173, 46, 0.50)';
    }
    if (progress === 3) {
      return 'rgba(42, 173, 46, 0.75)';
    }
    if (progress === 4) {
      return 'rgba(42, 173, 46, 1)';
    }
  };
  const getWidth = () => {
    if (progress === 1) {
      return '30%';
    }
    if (progress === 2) {
      return '50%';
    }
    if (progress === 3) {
      return '75%';
    }
    if (progress === 4) {
      return '100%';
    }
  };
  return (
    <div className={style.ProgressBarContainer}>
      <div className={style.ProgressBar}>
        <div className={style.ProgressBarFill} style={{ width: getWidth(), backgroundColor: getColor() }}></div>
      </div>
      <div className={style.buttons}>
        <button className={style.buttonDecrement} onClick={Decrement}>
          -
        </button>
        <button className={style.buttonIncrement} onClick={Increment}>
          +
        </button>
      </div>
      <span className={style.ProgressBarLabel}>
        {progress} из {fullCount} шт.
      </span>
    </div>
  );
}
