import style from './NoGoodsPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import ListScanProducts from '../../../components/ListScanProducts/ListScanProducts';
import MainButton from '../../../components/MainButton/MainButton';

export default function NoGoodsPage({ nextPage, prevPage }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Какого товара нет?</h2>
      <ListScanProducts onProblemsPage={true} />
      <MainButton
        styles={{ position: 'absolute', right: '25px', top: '195px', margin: '0px', padding: '0px' }}
        text="Готово"
        linkPath="brigadier"
      />
      {/* <MainButton text="Готово" /> */}
      <BottomMenu prevPage={prevPage} onProblemsPage={true} />
    </main>
  );
}
