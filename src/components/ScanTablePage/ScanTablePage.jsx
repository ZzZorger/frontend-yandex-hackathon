import style from './ScanTablePage.module.css';
import SetButton from '../SetButton/SetButton';
import BottomMenu from '../BottomMenu/BottomMenu';

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
      <div className={style.Stages}>
        <div
          style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)', margin: '0 10px 0 0' }}
          className={style.StageLine}
        />
        <div style={{ margin: '0 10px 0 0' }} className={style.StageLine} />
        <div className={style.StageLine} />
      </div>
      <BottomMenu />
    </main>
  );
}
