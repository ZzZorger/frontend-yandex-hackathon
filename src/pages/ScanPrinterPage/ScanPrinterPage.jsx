import style from './ScanPrinterPage.module.css';
import barcodPrinter from '../../images/barcodePrinter.svg';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';

export default function ScanPrinterPage({ nextPage, openBarcodePopup, handleBarcodePopupOpen, handlePopupClose }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Отсканируйте принтер</h2>
      <img className={style.BarcodPrinter} src={barcodPrinter} alt="Штрихкод принтера" />
      <StagesBar stage={2} />
      <BottomMenu scaning={true} handlePopupOpen={handleBarcodePopupOpen} />
      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={'Введите штрихкод принтера'}
        initValue={'9234 5678 234 32'}
      />
    </main>
  );
}
