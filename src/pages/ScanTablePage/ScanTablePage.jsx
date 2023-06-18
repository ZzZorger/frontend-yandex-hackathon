import style from './ScanTablePage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import ButtonsSet from '../../components/ButtonsSet/ButtonsSet';

export default function ScanTablePage({ nextPage, tables }) {
  const tablesNames = [];
  const statuses = [];
  for (let i = 0; i < tables.tables.length; i++) {
    tablesNames.push(tables.tables[i].name);
    statuses.push(tables.tables[i].available);
  }
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Сканируйте штрих код стола</h2>
      <p className={style.Subtitle}>или выберите его из списка</p>
      <ButtonsSet nextPage={nextPage} set={tablesNames} statuses={statuses} />
      <StagesBar stage={1} />
      <BottomMenu />
    </main>
  );
}
