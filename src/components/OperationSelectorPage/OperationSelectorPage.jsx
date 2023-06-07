import style from './OperationSelectorPage.module.css';
import MainButton from '../MainButton/MainButton';

export default function OperationSelectorPage({ nextPage, operations, progress }) {
  return (
    <main className={style.Content}>
      <progress max={progress.maxValue} value={progress.value}>
        {progress.operationsNum}
      </progress>
      <div className={style.OperationGrid}>
        {operations.map((text, i) => (
          <MainButton key={i} styles={style.OperationButton} text={text} onClick={nextPage} />
          // <button key={i} className={style.OperationButton} onClick={nextPage}>
          //   {text}
          // </button>
        ))}
      </div>
    </main>
  );
}
