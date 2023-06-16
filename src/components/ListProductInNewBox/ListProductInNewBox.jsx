import style from './ListProductInNewBox.module.css';
import ListItemProducts from '../ListItemProducts/ListItemProducts';
import newOrder from '../../utilitis/newOrder.json';

export default function ListProductInNewBox() {
  const activeColor = 'rgba(254, 212, 43, 0.3)';

  return (
    <ul className={style.ListProducts}>
      {newOrder[0].sku.map((product) => (
        <ListItemProducts key={product.id} activeColor={activeColor} product={product} />
      ))}
    </ul>
  );
}
