import style from './ScanPrinterPage.module.css';

import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
import BrigadierPopup from '../../components/BrigadierPopup/BrigadierPopup';

export default function ScanPrinterPage({
  openBarcodePopup,
  handleBarcodePopupOpen,
  handlePopupClose,
  titleText,
  imgSrc,
  titleStyle,
  stagesBar,
  popupText,
  initValue,
  handleLogin,
  openBrigadierPopup,
}) {
  function loginSubmit(barcode) {
    handleLogin(barcode);
  }
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
        onSubmit={loginSubmit}
        title={popupText}
        initValue={initValue || '9234 5678 234 32'}
      />
      <BrigadierPopup
        isOpen={openBrigadierPopup}
        onClose={handlePopupClose}
        title={'Ой, что то пошло не так:'}
        subtitle={'введен неверный штрихкод'}
      />
    </main>
  );
}
