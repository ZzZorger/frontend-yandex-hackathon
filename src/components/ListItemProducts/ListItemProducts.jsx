import style from './ListItemProducts.module.css';

export default function ListItemProducts() {
  return (
    <li className={style.productItem}>
      <div>
        <button className={style.copyBarcode}>
          {/* не думаю что тут должен быть тег span */}
          <span className={style.barcodeText}>9234 5678 234 32</span>
        </button>
      </div>
      <div className={style.productImage}>
        <img src={'/'} alt="Изображение товара для сканирования"></img>
        <div className={style.productCounter}>{`${2} шт.`}</div>
      </div>
      <p className={style.productText}>Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED</p>
    </li>
  );
}
