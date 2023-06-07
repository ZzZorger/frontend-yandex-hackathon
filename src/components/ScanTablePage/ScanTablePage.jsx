import style from './ScanTablePage.module.css';
import MainButton from '../MainButton/MainButton';

export default function ScanTablePage({ nextPage, tables }) {
  return (
    <main className={style.Content}>
      <div className={style.TableGrid}>
        {tables.map((text, i) => (
          <MainButton key={i} styles={style.TableButton} text={text} onClick={nextPage} />
        ))}
      </div>
      <div className={style.Stages}>
        <div className={style.StageLine} />
        <div className={style.StageLine} />
        <div className={style.StageLine} />
      </div>
    </main>
  );
}
