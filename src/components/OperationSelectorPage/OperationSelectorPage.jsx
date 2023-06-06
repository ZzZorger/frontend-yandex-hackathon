import style from './OperationSelectorPage.module.css';

export default function StartPage({ nextPage, operations }) {
  const progress = {
    maxValue: 200,
    value: 125,
    operationsNum: 16,
  };
  return (
    <main className={style.Content}>
      <progress max={progress.maxValue} value={progress.value}>
        {progress.operationsNum}
      </progress>
      <div className={style.OperationGrid}>
        {operations.map((text, i) => (
          <button key={i} className={style.OperationButton} onClick={nextPage}>
            {text}
          </button>
        ))}
      </div>
    </main>
  );
}
