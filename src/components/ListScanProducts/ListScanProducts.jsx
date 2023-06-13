import ListItemProducts from '../ListItemProducts/ListItemProducts';
import style from './ListScanProducts.module.css';

export default function ListScanProducts() {
  // через map + потестить при большом кол-ве айтемов
  return (
    <ul className={style.ListProducts}>
      <ListItemProducts />
      <ListItemProducts />
      <ListItemProducts />
      <ListItemProducts />
      <ListItemProducts />
    </ul>
  );
}
