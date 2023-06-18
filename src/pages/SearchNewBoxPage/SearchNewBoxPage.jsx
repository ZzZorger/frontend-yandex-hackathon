import style from './SearchNewBoxPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';

export default function SearchNewBoxPage({ nextPage, openBarcodePopup, handleBarcodePopupOpen, handlePopupClose }) {
  return (
    <>
      <div className={style.ScanBoxContent}>
        <h2 className={style.ScanBoxHeader}>Сканируйте упаковку</h2>
      </div>
      <BottomMenu scaning={true} handlePopupOpen={handleBarcodePopupOpen} />
      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={'Введите штрихкод ячейки'}
        initValue={'9234 5678 234 32'}
        // onSubmitButton={submitCell}
      />
    </>
  );
}
