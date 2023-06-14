import style from './ScanProductPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import ScanProduct from '../../components/ScanProduct/ScanProduct';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

export default function ScanProductPage({ nextPage, prevPage }) {
  // Страница скана товаров
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
