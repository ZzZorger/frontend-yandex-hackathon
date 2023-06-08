import style from './ScanPrinterPage.module.css';
import barcodPrinter from '../../images/barcodePrinter.svg';
import BottomMenu from '../BottomMenu/BottomMenu';
import StagesBar from '../StagesBar/StagesBar';

export default function ScanPrinterPage({ nextPage, prevPage }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Отсканируйте принтер</h2>
      <img className={style.BarcodPrinter} src={barcodPrinter} alt="Штрихкод принтера" />
      <StagesBar stage={2} />
      <BottomMenu scaning={true} nextPage={nextPage} prevPage={prevPage} />
    </main>
  );
}
