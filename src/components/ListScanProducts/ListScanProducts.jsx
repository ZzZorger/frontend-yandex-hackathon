import ListItemProducts from '../ListItemProducts/ListItemProducts';
import style from './ListScanProducts.module.css';
import newOrder from '../../utilitis/newOrder.json';

export default function ListScanProducts({ onProblemsPage }) {
  const data = JSON.parse(localStorage.getItem('data'));
  const productsArray = [];
  for (let i = 0; i < data[0].sku.length; i++) {
    productsArray.push(data[0].sku[i]);
  }
  const activeColor = '#F3F0E9';
  const textBlok = 'block';
  const textBox = '-webkit-box';

  return (
    <ul className={style.ListProducts}>
      {productsArray.map((product) => (
        <ListItemProducts key={product.id} activeColor={activeColor} textBox={textBox} textBlok={textBlok} product={product} />
      ))}
    </ul>
  );
}
