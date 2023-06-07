import style from './OperationSelectorPage.module.css';
import SetButton from '../SetButton/SetButton';

export default function OperationSelectorPage({ nextPage, operations, progress }) {
  return (
    <main className={style.Content}>
      <progress max={progress.maxValue} value={progress.value}>
        {progress.operationsNum}
      </progress>
      <div className={style.OperationGrid}>
        {operations.map((text, i) => (
          <SetButton key={i} text={text} onClick={nextPage} />
        ))}
      </div>
    </main>
  );
}
