import { Link } from 'react-router-dom';
import style from './MainButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function MainButton({ styles, text, onClick, linkPath, isDisabled }) {
  return (
    <Link to={linkPath}>
      <button style={styles} className={style.MainButton} onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    </Link>
  );
}
