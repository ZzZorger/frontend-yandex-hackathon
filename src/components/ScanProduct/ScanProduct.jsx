import style from './ScanProduct.module.css';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';

// коробки
const yma = {
  text: 'Коробка YMA',
  style: {
    backgroundColor: '#FF0000',
  },
};

const ymb = {
  text: 'Коробка YMB',
  style: {
    backgroundColor: '#F29A00',
  },
};

const ymc = {
  text: 'Коробка YMC',
  style: {
    backgroundColor: '#8A35B3',
  },
};

// Пакеты

const mya = {
  text: 'Пакет MYA',
  style: {
    backgroundColor: '#F73E47',
  },
};

const myb = {
  text: 'Пакет MYB',
  style: {
    backgroundColor: '#A7070F',
  },
};

const myс = {
  text: 'Пакет MYC',
  style: {
    backgroundColor: '#25ADD6',
  },
};
const myd = {
  text: 'Пакет MYD',
  style: {
    backgroundColor: '#F5C401',
  },
};
const mye = {
  text: 'Пакет MYE',
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
