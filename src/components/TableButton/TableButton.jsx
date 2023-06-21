import style from './TableButton.module.css';
import { Link } from 'react-router-dom';

export default function TableButton({ id, styles, text, available, postTable }) {
  if (!available) {
    styles = { background: '#F3F0E9', opacity: '0.5' };
  }
  function onClickHandler() {
    postTable(id);
  }
  return (
    <button style={styles} className={`${style.TableButton}`} onClick={onClickHandler}>
      {text}
    </button>
  );

  // return !available ? (
  //   <button style={styles} className={`${style.TableButton}`} onClick={onClickHandler} disabled>
  //     {text}
  //   </button>
  // ) : (
  //   <button style={styles} className={`${style.TableButton}`} onClick={onClickHandler}>
  //     {text}
  //   </button>
  // );
}
