import style from './ChoiсeButton.module.css';
import { Link } from 'react-router-dom';

export default function ChoiсeButton({ styles, text, route, handlePopupOpen, available }) {
  if (!available) {
    styles = { background: '#F3F0E9', opacity: '0.5' };
  }

  return (
    <Link to={route}>
      {!available ? (
        <button style={styles} className={`${style.ChoiсeButton}`} onClick={handlePopupOpen} disabled>
          {text}
        </button>
      ) : (
        <button style={styles} className={`${style.ChoiсeButton}`} onClick={handlePopupOpen}>
          {text}
        </button>
      )}
    </Link>
  );
}
