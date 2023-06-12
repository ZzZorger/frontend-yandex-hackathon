import style from './ScanPrinterPage.module.css';
import barcodPrinter from '../../images/barcodePrinter.svg';
import BottomMenu from '../BottomMenu/BottomMenu';
import StagesBar from '../StagesBar/StagesBar';
import BarcodePopup from '../BarcodePopup/BarcodePopup';

export default function ScanPrinterPage({ nextPage, prevPage, openPopup, handlePopupOpen, handlePopupClose }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Отсканируйте принтер</h2>
      <img className={style.BarcodPrinter} src={barcodPrinter} alt="Штрихкод принтера" />
      <StagesBar stage={2} />
      <BottomMenu scaning={true} prevPage={prevPage} handlePopupOpen={handlePopupOpen} />
      <BarcodePopup
        isOpen={openPopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={'Введите штрихкод принтера'}
        initValue={'9234 5678 234 32'}
      />
    </main>
  );
}
