import style from './ScanProductPage.module.css';

import MainButton from '../../components/MainButton/MainButton';
import ScanProduct from '../../components/ScanProduct/ScanProduct';
import TextItem from '../../components/TextItem/TextItem';

export default function ScanProductPage({ nextPage }) {
  return (
    <>
      <MainButton text={'Есть проблема'} />
      <ScanProduct />
      <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} nextPage={nextPage} />
    </>
  );
}
