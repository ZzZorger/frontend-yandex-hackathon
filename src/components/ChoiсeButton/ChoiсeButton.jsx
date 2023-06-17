import style from './ChoiсeButton.module.css';
import { Link } from 'react-router-dom';
// Маленькая кнопка на первых двух экранах

export default function ChoiсeButton({ styles, text, route, handlePopupOpen, status }) {
  if (status === 'busy') {
    styles = { background: '#F3F0E9', opacity: '0.5' };
  }

  return (
    <Link to={route}>
      <button style={styles} className={`${style.ChoiсeButton}`} onClick={handlePopupOpen}>
        {text}
      </button>
    </Link>
  );
}
