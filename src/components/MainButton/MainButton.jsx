import style from './MainButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function MainButton({ text, nextPage }) {
  return (
    <button className={style.MainButton} onClick={nextPage}>
      {text}
    </button>
  );
}
