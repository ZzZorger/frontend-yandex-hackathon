import style from './ScanProductPage.module.css';

import MainButton from '../MainButton/MainButton';
import ScanProduct from '../ScanProduct/ScanProduct';
import TextItem from '../TextItem/TextItem';

export default function ScanProductPage() {
  return (
    <div className={style.ScanProductPage}>
      <MainButton text={'Есть проблема'} />
      <ScanProduct />
      <MainButton text={`Упакуйте товары и сканикуйте коробку +`} />
    </div>
  );
}
