import { useState } from 'react';
import style from './ProgressBar.module.css';

export default function ProgressBar() {
  const [progress, setProgress] = useState(1);

  const handleScanClick = () => {
    if (progress < 3) {
      setProgress(progress + 1);
    }
  };

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
      <span className={style.ProgressBarLabel}>{progress} из 3 шт.</span>
    </div>
  );
}
