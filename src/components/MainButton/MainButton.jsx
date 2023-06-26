import { Link } from 'react-router-dom';
import style from './MainButton.module.css';

// базовые стили основных больших кнопок на гавном экране

export default function MainButton({ styles, text, onClick, isDisabled }) {
  return (
    <button style={styles} className={style.MainButton} onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}
// export default function MainButton({ styles, text, onClick, linkPath, isDisabled }) {
//   return (
//     <Link to={linkPath}>
//       {isDisabled ? (
//         <button style={styles} className={style.MainButton} onClick={onClick} disabled={isDisabled}>
//           {text}
//         </button>
//       ) : (
//         <button style={styles} className={style.MainButton} onClick={onClick}>
//           {text}
//         </button>
//       )}
//     </Link>
//   );
// }
