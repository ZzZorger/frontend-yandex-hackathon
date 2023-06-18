import style from './ScanProductPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import ScanProduct from '../../components/ScanProduct/ScanProduct';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

export default function ScanProductPage({ nextPage }) {
  return (
    <>
      <div className={style.ScanProductPage}>
        <MainButton text={'Есть проблема'} linkPath="/problems" />
        <ScanProduct />
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} linkPath={nextPage} />
      </div>
      <BottomMenu />
    </>
  );
}
