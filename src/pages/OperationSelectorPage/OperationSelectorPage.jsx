import style from './OperationSelectorPage.module.css';
import ButtonsSet from '../../components/ButtonsSet/ButtonsSet';

export default function OperationSelectorPage({ nextPage, operations, progress }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Показатель за месяц</h2>
      <div className={style.ProgressBar}></div>
      <ButtonsSet nextPage={nextPage} set={operations} />
    </main>
  );
}
