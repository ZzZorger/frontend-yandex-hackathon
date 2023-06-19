import style from './ScanProduct.module.css';
import { Fragment } from 'react';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';
import newOrder from '../../utilitis/newOrder.json';
import newCells from '../../utilitis/newCells.json';
import { packages } from '../../utilitis/package';

export default function ScanProduct() {
  localStorage.setItem('order', JSON.stringify(newCells));

  const order = JSON.parse(localStorage.getItem('order'));
  const dataCells = JSON.parse(localStorage.getItem('cells'));
  const cellsArray = [];

  const carrentPack = null;
  const mockPack = 'YMA';

  if (mockPack in packages) {
    // console.log(packages[mockPack].name);
    localStorage.setItem('carrentPack', JSON.stringify(packages[mockPack]));
  }

  for (let i = 0; i < dataCells.cells.length; i++) {
    cellsArray.push(dataCells.cells[0].name);
  }

  return (
    <div className={style.ScanProduct}>
      <div className={style.ScanProductHeader}>
        {cellsArray.length > 1 ? (
          <h2 className={style.ScanProductText}>{'Упакуйте товары из ячеек'}</h2>
        ) : (
          <h2 className={style.ScanProductText}>{'Упакуйте товары из ячейки'}</h2>
        )}

        <div className={style.ScanProductСells}>
          {cellsArray.map((cell, id) => (
            <h2 key={id} className={style.ScanProductСell}>
              {cell}
              {id < cellsArray.length - 1 && <span className={style.ProductСellRound} />}
            </h2>
          ))}
        </div>
      </div>
      <div className={style.ScanProductInformation}>
        {/* считать кол-во товаров, придет поле с бека */}
        <TextItem styles={{}}>{`${order.total_skus_quantity} товаров`}</TextItem>
        <TextItem styles={{}}>{`Почта России`}</TextItem>
        {/* Вывод массива из коробок */}
        <TextItem styles={{ backgroundColor: packages[mockPack].backgroundColor }}>{` Коробка ${packages[mockPack].name}`}</TextItem>
      </div>
      <div>
        <ListScanProducts />
      </div>
    </div>
  );
}
