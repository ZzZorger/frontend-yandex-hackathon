import style from './OperationSelectorPage.module.css';
import ButtonsSet from '../ButtonsSet/ButtonsSet';

export default function OperationSelectorPage({ nextPage, operations, progress }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Показатель за месяц</h2>
      <progress className={style.Progress} max={progress.maxValue} value={progress.value}>
        {progress.operationsNum}
      </progress>
      <ButtonsSet nextPage={nextPage} set={operations} />
    </main>
  );
}
