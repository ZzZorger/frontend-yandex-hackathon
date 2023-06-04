import style from './MainButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function MainButton({ text }) {
  return <button className={style.MainButton}>{text}</button>;
}
