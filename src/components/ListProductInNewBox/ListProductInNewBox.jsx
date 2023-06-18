import style from './ListProductInNewBox.module.css';
import ListItemProducts from '../ListItemProducts/ListItemProducts';
import newOrder from '../../utilitis/newOrder.json';
import { useReducer } from 'react';

export default function ListProductInNewBox({ addproductInNewBox }) {
  const order = JSON.parse(localStorage.getItem('order'));
  const activeColor = 'rgba(254, 212, 43, 0.3)';
  const productsArray = [];
  // const productInNewBox = [];

  for (let i = 0; i < order.skus.length; i++) {
    productsArray.push(order.skus[i]);
  }

  // function addproductInNewBox(activeProduct) {
  //   productInNewBox.push(activeProduct);
  //   console.log(productInNewBox);
  // }

  return (
    <ul className={style.ListProducts}>
      {productsArray.map((product) => (
        <ListItemProducts key={product.sku} activeColor={activeColor} addproductInNewBox={addproductInNewBox} product={product} />
      ))}
    </ul>
  );
}
