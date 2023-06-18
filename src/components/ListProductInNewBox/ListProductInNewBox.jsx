import style from './ListProductInNewBox.module.css';
import ListItemProducts from '../ListItemProducts/ListItemProducts';

export default function ListProductInNewBox({ addproductInNewBox }) {
  const order = JSON.parse(localStorage.getItem('order'));
  const activeColor = 'rgba(254, 212, 43, 0.3)';
  const productsArray = [];

  for (let i = 0; i < order.skus.length; i++) {
    productsArray.push(order.skus[i]);
  }
  // console.log(productsArray);
  return (
    <ul className={style.ListProducts}>
      {productsArray.map((product) => (
        <ListItemProducts key={product.sku} activeColor={activeColor} addproductInNewBox={addproductInNewBox} product={product} />
      ))}
    </ul>
  );
}
