import style from './ScanProduct.module.css';
import { Fragment } from 'react';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';
// import newOrder from '../../utilitis/newOrder.json';
// import newCells from '../../utilitis/newCells.json';
import { packages } from '../../utilitis/package';

export default function ScanProduct() {
  const order = JSON.parse(localStorage.getItem('order'));
  const dataCells = JSON.parse(localStorage.getItem('cells'));
  const mockPack = order.recommended_cartontype.cartontype;
  let mockPackTypeText = '';
  if (packages[mockPack].type === 'packet') {
    mockPackTypeText = 'Пакет';
  } else if (packages[mockPack].type === 'box') {
    mockPackTypeText = 'Коробка';
  }
  // let mockPack = '';
  // console.log(order);
  // console.log(order.recommended_cartontype);
  // if (order.recommended_cartontype === null) {
  //   mockPack = 'YMA';
  // } else {
  //   mockPack = order.recommended_cartontype.cartontype;
  // }
  // console.log(order);
  // console.log(dataCells);
  const cellsArrayNames = [];
  for (let i = 0; i < dataCells.length; i++) {
    cellsArrayNames.push(dataCells[i].name);
  }
  return (
    <div className={style.ScanProduct}>
      <div className={style.ScanProductHeader}>
        <h2 className={style.ScanProductText}>{dataCells.length > 1 ? 'Упакуйте товары из ячеек' : 'Упакуйте товары из ячейки'}</h2>
        <div className={style.ScanProductСells}>
          {cellsArrayNames.map((cell, i) => (
            <h2 key={i} className={style.ScanProductСell}>
              {cell}
              {i < cellsArrayNames.length - 1 && <span className={style.ProductСellRound} />}
            </h2>
          ))}
        </div>
      </div>
      <div className={style.ScanProductInformation}>
        {/* считать кол-во товаров, придет поле с бека */}
        <TextItem styles={{}}>{`${order.total_skus_quantity} товаров`}</TextItem>
        <TextItem styles={{}}>{`Почта России`}</TextItem>
        {/* Вывод массива из коробок */}
        <TextItem styles={{ backgroundColor: packages[mockPack].backgroundColor }}>{` ${mockPackTypeText} ${mockPack}`}</TextItem>
      </div>
      <div>
        <ListScanProducts />
      </div>
    </div>
  );
}
