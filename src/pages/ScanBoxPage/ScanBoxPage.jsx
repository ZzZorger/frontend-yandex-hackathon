import style from './ScanBoxPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
const yma = {
  text: 'YMA',
  style: {
    backgroundColor: '#FF0000',
  },
};

const ymb = {
  text: 'YMB',
  style: {
    backgroundColor: '#F29A00',
  },
};

const ymc = {
  text: 'YMC',
  style: {
    backgroundColor: '#8A35B3',
  },
};

// Пакеты

const mya = {
  text: 'MYA',
  style: {
    backgroundColor: '#F73E47',
  },
};

const myb = {
  text: 'MYB',
  style: {
    backgroundColor: '#A7070F',
  },
};

const myс = {
  text: 'MYC',
  style: {
    backgroundColor: '#25ADD6',
  },
};
const myd = {
  text: 'MYD',
  style: {
    backgroundColor: '#F5C401',
  },
};
const mye = {
  text: 'MYE',
  style: {
    backgroundColor: '#5D4A00',
  },
};

const stretch = {
  text: 'Стрейтч-плёнка',
  style: {
    backgroundColor: '#E0EEFF',
  },
};

const nonPack = {
  text: 'Коробка не требуется',
};

export default function ScanBoxPage({ nextPage, openBarcodePopup, handleBarcodePopupOpen, handlePopupClose }) {
  return (
    <>
      {/* Сканирование коробок */}
      {/* <div className={style.ScanBoxContent}>
        <h2 className={style.ScanBoxHeader}>Сканируйте упаковку</h2>
        <span style={mya.style} className={style.ScanBox}>
          {mya.text}
        </span>
      </div> */}

      {/* Сканирование пакетов */}
      <div className={style.ScanPack}>
        <MainButton text={'Есть проблема'} linkPath="/problems" />
        <div className={style.ScanPackContent}>
          <h2 className={style.ScanPackHeader}>Сканируйте сейф-пакеты</h2>
          <span className={style.ScanPackText}>Оцените сами, сколько хватит — максимум 3 штуки</span>
          {/* + прогресс бар с счеиком */}
          <ProgressBar />
        </div>
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Закрыть пакет`} linkPath={nextPage} />
      </div>

      {/*scaning отрисовывается по условию  */}
      <BottomMenu scaning={true} handlePopupOpen={handleBarcodePopupOpen} />
      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        onSubmit=""
        title={'Введите штрихкод пакета'}
        initValue={'9234 5678 234 32'}
      />
    </>
  );
}
