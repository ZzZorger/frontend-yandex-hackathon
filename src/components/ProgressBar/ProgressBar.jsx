import { useState } from 'react';
import style from './ProgressBar.module.css';

export default function ProgressBar({ count }) {
  const getColor = () => {
    if (count === 1) {
      return 'rgba(42, 173, 46, 0.33)';
    }
    if (count === 2) {
      return 'rgba(42, 173, 46, 0.66)';
    }
    if (count === 3) {
      return 'rgba(42, 173, 46, 1)';
    }
  };
  const getWidth = () => {
    if (count === 1) {
      return '30%';
    }
    if (count === 2) {
      return '65%';
    }
    if (count === 3) {
      return '100%';
    }
  };
  return (
    <div className={style.ProgressBarContainer}>
      <div className={style.ProgressBar}>
        <div className={style.ProgressBarFill} style={{ width: getWidth(), backgroundColor: getColor() }}></div>
      </div>
      <span className={style.ProgressBarLabel}>{count} из 3 шт.</span>
    </div>
  );
}
