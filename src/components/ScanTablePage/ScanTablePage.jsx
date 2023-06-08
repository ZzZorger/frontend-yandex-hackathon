import style from './ScanTablePage.module.css';
import BottomMenu from '../BottomMenu/BottomMenu';
import StagesBar from '../StagesBar/StagesBar';
import ButtonsSet from '../ButtonsSet/ButtonsSet';

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
