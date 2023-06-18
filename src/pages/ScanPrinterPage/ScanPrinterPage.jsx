import style from './ScanPrinterPage.module.css';

import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';

export default function ScanPrinterPage({
  nextPage,
  openBarcodePopup,
  handleBarcodePopupOpen,
  handlePopupClose,
  titleText,
  imgSrc,
  titleStyle,
  stagesBar,
  popupText,
}) {
  return (
    <main className={style.Content}>
      <h2 style={titleStyle} className={style.Title}>
        {titleText}
      </h2>
      <img className={style.BarcodPrinter} src={imgSrc} alt="Штрихкод принтера" />
      {stagesBar && <StagesBar stage={2} />}
      <BottomMenu scaning={true} handlePopupOpen={handleBarcodePopupOpen} hideBackBtn={true} />
      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={popupText}
        // title={'Введите штрихкод принтера'}
        initValue={'9234 5678 234 32'}
      />
    </main>
  );
}
