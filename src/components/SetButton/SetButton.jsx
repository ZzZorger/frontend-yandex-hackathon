import style from './SetButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function SetButton({ styles, text, onClick }) {
  return (
    <button style={styles} className={style.SetButton} onClick={onClick}>
      {text}
    </button>
  );
}
