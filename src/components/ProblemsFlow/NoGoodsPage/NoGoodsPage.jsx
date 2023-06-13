import style from './NoGoodsPage.module.css';
import BottomMenu from '../../BottomMenu/BottomMenu';
import ListScanProducts from '../../ListScanProducts/ListScanProducts';

export default function NoGoodsPage({ nextPage, prevPage }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Какого товара нет?</h2>
      <ListScanProducts />
      <BottomMenu prevPage={prevPage} onProblemsPage={true} />
    </main>
  );
}
