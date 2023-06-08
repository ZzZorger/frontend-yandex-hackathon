import style from './ScanPrinterPage.module.css';
import barcodPrinter from '../../images/barcodePrinter.svg';

export default function ScanPrinterPage({ nextPage }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Отсканируйте принтер</h2>
      <img src={barcodPrinter} alt="Штрихкод принтера" />
    </main>
  );
}
