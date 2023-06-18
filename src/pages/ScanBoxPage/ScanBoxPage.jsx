import style from './ScanBoxPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
import { packages } from '../../utilitis/package';
import { useState } from 'react';

export default function ScanBoxPage({ nextPage, openBarcodePopup, handleBarcodePopupOpen, handlePopupClose }) {
  const [count, setCount] = useState(0);

  let carrentPack = null;
  let currentType = '';
  const mockPack = 'MYA';
  // const mockPacket = '9234 5678 234 32';

  if (mockPack in packages) {
    carrentPack = packages[mockPack];
  }
  if (carrentPack.type === 'box') {
    currentType = 'box';
  } else currentType = 'packet';

  const handleClick = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };
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
        title={'Введите штрихкод пакета'}
        initValue={'9234 5678 234 32'}
      />
    </>
  );
}
