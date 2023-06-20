import ListItemProducts from '../ListItemProducts/ListItemProducts';
import style from './ListScanProducts.module.css';
import newOrder from '../../utilitis/newOrder.json';

export default function ListScanProducts({ onProblemsPage }) {
  localStorage.setItem('order', JSON.stringify(newOrder));

  const data = JSON.parse(localStorage.getItem('order'));

  const productsArray = [];
  const activeColor = '#F3F0E9';
  const textBlok = 'block';
  const textBox = '-webkit-box';

  for (let i = 0; i < data.skus.length; i++) {
    productsArray.push(data.skus[i]);
  }

  return (
    <ul className={style.ListProducts}>
      {productsArray.map((product) => (
        <ListItemProducts key={product.sku} activeColor={activeColor} textBox={textBox} textBlok={textBlok} product={product} />
      ))}
    </ul>
  );
}
