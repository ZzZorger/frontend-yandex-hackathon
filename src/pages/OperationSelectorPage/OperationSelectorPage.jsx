import style from './OperationSelectorPage.module.css';
import ButtonsSet from '../../components/ButtonsSet/ButtonsSet';

export default function OperationSelectorPage({ nextPage, operations, progress }) {
  const operationsNames = [];
  const statuses = [];
  for (let i = 0; i < operations.operations.length; i++) {
    operationsNames.push(operations.operations[i].name);
    statuses.push(operations.operations[i].status);
  }
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Показатель за месяц</h2>
      <div className={style.ProgressBar}>
        {/* <p className={style.ProgressValue}>{progress.value}%</p>
        <p className={style.ProgressPerHour}>{progress.operationsNum} операций в час</p> */}
      </div>

      {/* <progress className={style.Progress} max={progress.maxValue} value={progress.value}>
        {progress.operationsNum}
      </progress> */}
      <ButtonsSet nextPage={nextPage} set={operationsNames} setStyle={{ maxWidth: '1767px' }} statuses={statuses} />
    </main>
  );
}
