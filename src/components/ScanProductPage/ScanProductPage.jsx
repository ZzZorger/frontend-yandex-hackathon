import style from './ScanProductPage.module.css';
import MainButton from '../MainButton/MainButton';
import ScanProduct from '../ScanProduct/ScanProduct';
import BottomMenu from '../BottomMenu/BottomMenu';

export default function ScanProductPage({ nextPage, prevPage }) {
  return (
    <>
      <div className={style.ScanProductPage}>
        <MainButton text={'Есть проблема'} />
        <ScanProduct />
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} nextPage={nextPage} />
      </div>
      <BottomMenu prevPage={prevPage} />
    </>
  );
}
