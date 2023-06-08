import style from './ScanTablePage.module.css';
import SetButton from '../SetButton/SetButton';
import BottomMenu from '../BottomMenu/BottomMenu';
import StagesBar from '../StagesBar/StagesBar';

export default function ScanTablePage({ nextPage, tables }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Сканируйте штрих код стола</h2>
      <p className={style.Subtitle}>или выберите его из списка</p>
      <div className={style.TableGrid}>
        {tables.map((text, i) => (
          <SetButton key={i} text={text} onClick={nextPage} />
        ))}
      </div>
      <StagesBar stage={1} />
      <BottomMenu />
    </main>
  );
}
