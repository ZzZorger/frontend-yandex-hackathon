import style from './ChoiсeButton.module.css';
import { Link } from 'react-router-dom';

export default function ChoiсeButton({ id, styles, text, route, handlePopupOpen, available, postTable }) {
  if (!available) {
    styles = { background: '#F3F0E9', opacity: '0.5' };
  }
  // console.log(id, styles, text, route, handlePopupOpen, available, postTable);
  return (
    // <Link to={route}>
    // <button style={styles} className={`${style.ChoiсeButton}`} onClick={postTable(id)}>
    //   {text}
    // </button>

    // !available ? (
    //   <button style={styles} className={`${style.ChoiсeButton}`} onClick={postTable(id)} disabled>
    //     {text}
    //   </button>
    // ) : (
    //   <button style={styles} className={`${style.ChoiсeButton}`} onClick={postTable(id)}>
    //     {text}
    //   </button>
    // )
    // </Link>
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
