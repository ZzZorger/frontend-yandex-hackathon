import style from './ScanProduct.module.css';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';

export default function ScanProduct() {
  return (
    <div className={style.ScanProduct}>
      <div className={style.ScanProductHeader}>
        <h2 className={style.ScanProductText}>Cканируйте товары из ячейки </h2>
        <h2 className={style.ScanProductСell}>{'B - 09'}</h2>
      </div>
      <div className={style.ScanProductInformation}>
        <TextItem styles={{ fontSize: '23.9994px', fontWeight: '500', padding: '10.4994px 23.9994px' }}>{`${5} товаров`}</TextItem>
        <TextItem styles={{ fontSize: '23.9994px', fontWeight: '500', padding: '10.4994px 23.9994px' }}>{`Почта России`}</TextItem>
        <TextItem
          styles={{ fontSize: '23.9994px', fontWeight: '500', padding: '10.4994px 23.9994px', background: 'var( --active-bg-item)' }}
        >{`коробка ${'YMF'}`}</TextItem>
      </div>
      <div>
        <ListScanProducts />
      </div>
    </div>
  );
}
