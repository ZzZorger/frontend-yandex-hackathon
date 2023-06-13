import style from './ScanTablePage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import ButtonsSet from '../../components/ButtonsSet/ButtonsSet';

export default function ScanTablePage({ nextPage, tables, prevPage }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Сканируйте штрих код стола</h2>
      <p className={style.Subtitle}>или выберите его из списка</p>
      <ButtonsSet nextPage={nextPage} set={tables} />
      <StagesBar stage={1} />
      <BottomMenu prevPage={prevPage} />
    </main>
  );
}
