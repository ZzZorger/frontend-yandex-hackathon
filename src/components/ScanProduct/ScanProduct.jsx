import style from './ScanProduct.module.css';
import TextItem from '../TextItem/TextItem';
import ListScanProducts from '../ListScanProducts/ListScanProducts';
import newOrder from '../../utilitis/newOrder.json';
import packageBox from '../../utilitis/package';

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
        {/* считать кол-во товаров, придет поле с бека */}
        <TextItem styles={{}}>{`${newOrder[0].sku.length} товаров`}</TextItem>
        <TextItem styles={{}}>{`Почта России`}</TextItem>
        {/* Вывод массива из коробок */}
        <TextItem styles={{ backgroundColor: packageBox[0].backgroundColor }}>{` Коробка ${packageBox[0].name}`}</TextItem>
      </div>
      <div>
        <ListScanProducts />
      </div>
    </div>
  );
}
