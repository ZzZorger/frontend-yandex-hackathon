import style from './MainButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function MainButton({ styles, text, onClick }) {
  return (
    <button style={styles} className={style.MainButton} onClick={onClick}>
      {text}
    </button>
  );
}
