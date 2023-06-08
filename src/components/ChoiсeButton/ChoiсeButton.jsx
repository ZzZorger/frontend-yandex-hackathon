import style from './ChoiсeButton.module.css';

// Маленькая кнопка на первых двух экранах

export default function ChoiсeButton({ styles, text, onClick }) {
  return (
    <button style={styles} className={style.ChoiсeButton} onClick={onClick}>
      {text}
    </button>
  );
}
