import style from './Main.module.css';

import ScanProductPage from '../ScanProductPage/ScanProductPage';
import BoxFillingPage from '../BoxFillingPage/BoxFillingPage';
import EndAssemblyPage from '../EndAssemblyPage/EndAssemblyPage';

export default function Main({ nextPage }) {
  return (
    <div className={style.Main}>
      {/* <ScanProductPage nextPage={nextPage} /> */}
      {/* <BoxFillingPage /> */}
      <EndAssemblyPage />
    </div>
  );
}
