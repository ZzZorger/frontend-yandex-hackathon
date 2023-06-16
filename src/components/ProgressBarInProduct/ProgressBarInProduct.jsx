import { useState } from 'react';
import style from './ProgressBarInProduct.module.css';

export default function ProgressBarInProduct({ fullCount }) {
  const [progress, setProgress] = useState(1);

  const Increment = () => {
    if (progress < 4) {
      setProgress(progress + 1);
    }
  };

  const Decrement = () => {
    if (progress > 2) {
      setProgress(progress - 1);
    }
  };

  //   const handleScanClick = () => {
  //     if (progress < 3) {
  //       setProgress(progress + 1);
  //     }
  //   };

  const getColor = () => {
    if (progress === 1) {
      return 'rgba(42, 173, 46, 0.25)';
    }
    if (progress === 2) {
      return 'rgba(42, 173, 46, 0.75)';
    }
    if (progress === 3) {
      return 'rgba(42, 173, 46, 1)';
    }
  };
  const getWidth = () => {
    if (progress === 1) {
      return '30%';
    }
    if (progress === 2) {
      return '65%';
    }
    if (progress === 3) {
      return '100%';
    }
  };
  return (
    <div className={style.ProgressBarContainer}>
      <div className={style.ProgressBar}>
        <div className={style.ProgressBarFill} style={{ width: getWidth(), backgroundColor: getColor() }}></div>
      </div>
      <div className={style.buttons}>
        <button className={style.buttonIncrement} onClick={Increment}>
          -
        </button>
        <button className={style.buttonDecrement} onClick={Decrement}>
          +
        </button>
      </div>
      <span className={style.ProgressBarLabel}>
        {progress} из {fullCount} шт.
      </span>
    </div>
  );
}
