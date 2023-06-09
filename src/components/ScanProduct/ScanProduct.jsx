import style from './ScanProduct.module.css';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';

const yma = {
  text: 'Коробка YMA',
  style: {
    backgroundColor: '#FF0000',
  },
};

const ymb = {
  text: 'Коробка YMB',
  style: {
    backgroundColor: '#FF0000',
  },
};

const ymc = {
  text: 'Коробка YMC',
  style: {
    backgroundColor: '#FF0000',
  },
};

export default function ScanProduct() {
  return (
    <div className={style.ScanProduct}>
      <div className={style.ScanProductHeader}>
        <h2 className={style.ScanProductText}>Упакуйте товары из ячейки</h2>
        <h2 className={style.ScanProductСell}>{'B - 09'}</h2>
      </div>
      <div className={style.ScanProductInformation}>
        <TextItem styles={{}}>{`${5} товаров`}</TextItem>
        <TextItem styles={{}}>{`Почта России`}</TextItem>
        <TextItem styles={yma.style}>{yma.text}</TextItem>
      </div>
      <div>
        <ListScanProducts />
      </div>
    </div>
  );
}
