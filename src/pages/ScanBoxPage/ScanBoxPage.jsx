import style from './ScanBoxPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
import { packages } from '../../utilitis/package';
import { useState } from 'react';

export default function ScanBoxPage({ nextPage, openBarcodePopup, handleBarcodePopupOpen, handlePopupClose }) {
  const [count, setCount] = useState(0);
  // const carrentPack = JSON.parse(localStorage.getItem('carrentPack'));
  const order = JSON.parse(localStorage.getItem('order'));
  const carrentPack = packages[order.recommended_cartontype.cartontype].type;
  const packBarcode = order.recommended_cartontype.barcode;

  let currentType = '';
  if (carrentPack.type === 'box') {
    currentType = 'box';
  } else currentType = 'packet';
  const handleClick = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };
  // console.log(order.recommended_cartontype.barcode);
  function submitBox(barcode) {
    if (packBarcode === barcode) {
      console.log('все ок');
      // localStorage.setItem('recommended_cartontype', order.recommended_cartontype);
    }
    console.log(order.recommended_cartontype);
    console.log(barcode);
  }

  return (
    <>
      {/* Сканирование коробок */}
      {currentType === 'box' && (
        <div className={style.ScanBoxContent}>
          <h2 className={style.ScanBoxHeader}>Сканируйте упаковку</h2>
          <span style={{ backgroundColor: carrentPack.backgroundColor }} className={style.ScanBox}>
            {carrentPack.name}
          </span>
        </div>
      )}

      {/* Сканирование пакетов */}
      {currentType === 'packet' && (
        <div className={style.ScanPack}>
          <MainButton text={'Есть проблема'} linkPath="/problems" />
          <div className={style.ScanPackContent}>
            <h2 className={style.ScanPackHeader}>Сканируйте сейф-пакеты</h2>
            <span className={style.ScanPackText}>Оцените сами, сколько хватит — максимум 3 штуки</span>
            {/* + прогресс бар с счеиком */}
            <ProgressBar count={count} />
          </div>
          <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Закрыть пакет`} linkPath={nextPage} />
        </div>
      )}

      {/*scaning отрисовывается по условию  */}
      <BottomMenu scaning={true} handlePopupOpen={handleBarcodePopupOpen} />

      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        onClick={handleClick}
        onSubmit={nextPage}
        title={'Введите штрихкод упаковки'}
        initValue={packBarcode}
        isPack={true}
      />

      {/* {currentType === 'packet' ? (
        <BarcodePopup
          isOpen={openBarcodePopup}
          onClose={handlePopupClose}
          onClick={handleClick}
          onSubmit={nextPage}
          title={'Введите штрихкод пакета'}
          initValue={packBarcode}
          isPack={true}
        />
      ) : (
        <BarcodePopup
          isOpen={openBarcodePopup}
          onClose={handlePopupClose}
          onClick={handleClick}
          onSubmit={nextPage}
          title={'Введите штрихкод пакета'}
          initValue={packBarcode}
          onSubmitButton={submitBox}
        />
      )} */}
    </>
  );
}
