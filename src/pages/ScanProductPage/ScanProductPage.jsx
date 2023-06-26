import style from './ScanProductPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import ScanProduct from '../../components/ScanProduct/ScanProduct';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

export default function ScanProductPage({ onCollectedOrder }) {
  return (
    <>
      <div className={style.ScanProductPage}>
        <MainButton text={'Есть проблема'} />
        <ScanProduct />
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} onClick={onCollectedOrder} />
      </div>
      <BottomMenu />
    </>
  );
}
