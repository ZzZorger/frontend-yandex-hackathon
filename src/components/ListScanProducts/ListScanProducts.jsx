import ListItemProducts from '../ListItemProducts/ListItemProducts';
import style from './ListScanProducts.module.css';
import newOrder from '../../utilitis/newOrder.json';

export default function ListScanProducts({ onProblemsPage }) {
  const activeColor = '#F3F0E9';
  const textBlok = 'block';
  const textBox = '-webkit-box';
  console.log('показвыем элементы списка');

  return (
    <ul className={style.ListProducts}>
      {newOrder[0].sku.map((product) => (
        <ListItemProducts key={product.id} activeColor={activeColor} textBox={textBox} textBlok={textBlok} product={product} />
      ))}
    </ul>
  );
}
