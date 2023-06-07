import style from './OperationButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function OperationButton({ styles, text, nextPage }) {
  return (
    <button style={styles} className={style.OperationButton} onClick={nextPage}>
      {text}
    </button>
  );
}
