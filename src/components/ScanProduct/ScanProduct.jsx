import style from './ScanProduct.module.css';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';
import { Fragment } from 'react';
// import { Fragment } from 'react';
// import packageBox from '../../Utilitis/package.js';

// for (var box of packageBox) {
//   if (box.name === ) {

//   }
// }

export default function ScanProduct() {
  return (
    <div className={style.ScanProduct}>
      <div className={style.ScanProductHeader}>
        {/* если ячеек больше чем одна то текст: "Упакуйте товары из ячеек" */}
        <h2 className={style.ScanProductText}>{'Упакуйте товары из ячейки'}</h2>
        {/* Обработать этот кейс с данными */}
        {/* {DataMenu.map((ItemMenu, id) => (
          <Fragment key={id}> */}
        {/* протестить когда тут несколько ячеек */}
        <div className={style.ScanProductСells}>
          <h2 className={style.ScanProductСell}>{'B - 09'}</h2>
          <h2 className={style.ScanProductСell}>{'B - 09'}</h2>
          <h2 className={style.ScanProductСell}>{'B - 09'}</h2>
        </div>

        {/* {id < DataMenu.length - 1 && <span className={styles.ProductСellRound} />}
          </Fragment>
        ))} */}
      </div>
      <div className={style.ScanProductInformation}>
        {/* считать кол-во товаров */}
        <TextItem styles={{}}>{`${5} товаров`}</TextItem>
        <TextItem styles={{}}>{`Почта России`}</TextItem>
        {/* Вывод массива из коробок */}
        <TextItem styles={{ backgroundColor: '#FF0000' }}>{` Коробка ${'YMA'}`}</TextItem>
      </div>
      <div>
        <ListScanProducts />
      </div>
    </div>
  );
}
