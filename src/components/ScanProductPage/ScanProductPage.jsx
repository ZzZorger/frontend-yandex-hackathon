import style from './ScanProductPage.module.css';

import MainButton from '../MainButton/MainButton';
import ScanProduct from '../ScanProduct/ScanProduct';
import TextItem from '../TextItem/TextItem';

export default function ScanProductPage({ nextPage }) {
  return (
    <>
      <MainButton text={'Есть проблема'} />
      <ScanProduct />
      <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Упакуйте товары и сканикуйте коробку`} nextPage={nextPage} />
    </>
  );
}
