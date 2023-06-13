import style from './ChoiсeButton.module.css';
import { Link } from 'react-router-dom';
// Маленькая кнопка на первых двух экранах

export default function ChoiсeButton({ styles, text, route }) {
  return (
    <Link to={route}>
      <button style={styles} className={style.ChoiсeButton}>
        {text}
      </button>
    </Link>
  );
}

// export default function ChoiсeButton({ styles, text, onClick }) {
//   return (
//     <button style={styles} className={style.ChoiсeButton} onClick={onClick}>
//       {text}
//     </button>
//   );
// }

// export default function ChoiсeButton({ styles, text, nextPage }) {
//   return (
//     <Link to={nextPage} style={styles} className={style.ChoiсeButton}>
//       {/* <Link to={nextPage} style={{ background: '#F3F0E9', color: '#212121' }} className={style.ChoiсeButton}> */}
//       {text}
//     </Link>
//   );
// }
