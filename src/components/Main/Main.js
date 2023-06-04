import style from './Main.module.css';

import ScanProductPage from '../ScanProductPage/ScanProductPage';

export default function Main({ nextPage }) {
  return (
    <div className={style.Main}>
      <ScanProductPage nextPage={nextPage} />
    </div>
  );
}
