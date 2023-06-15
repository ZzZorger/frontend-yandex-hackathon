import style from './ChoiсeButton.module.css';
import { Link } from 'react-router-dom';
// Маленькая кнопка на первых двух экранах

export default function ChoiсeButton({ styles, text, route, handlePopupOpen }) {
  return (
    <Link to={route}>
      <button style={styles} className={style.ChoiсeButton} onClick={handlePopupOpen}>
        {text}
      </button>
    </Link>
  );
}
