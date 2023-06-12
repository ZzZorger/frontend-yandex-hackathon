import style from './BottomMenu.module.css';
import keyboardIcon from '../../images/keyboardIcon.svg';

export default function BottomMenu({ hideBackBtn, scaning, takeBreak, nextPage, prevPage, handlePopupOpen }) {
  return (
    <div className={style.Content}>
      <button style={hideBackBtn ? { display: 'none' } : { display: 'block' }} className={style.BackButton} onClick={prevPage}>
        Назад
      </button>
      <div style={!scaning ? { display: 'none' } : { display: 'block' }} className={style.KeyboardBlock} onClick={handlePopupOpen}>
        <img src={keyboardIcon} alt="Иконка клавиатуры" />
        <button className={style.KeyboardButton}>Ввести с клавиатуры</button>
      </div>
      <div style={!takeBreak ? { display: 'none' } : { display: 'block' }} className={style.KeyboardBlock} onClick={nextPage}>
        <button className={style.KeyboardButton} onClick={nextPage}>
          Хочу на перерыв
        </button>
      </div>
    </div>
  );
}
