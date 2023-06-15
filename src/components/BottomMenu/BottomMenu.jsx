import style from './BottomMenu.module.css';
import keyboardIcon from '../../images/keyboardIcon.svg';
import { useNavigate, Link } from 'react-router-dom';

export default function BottomMenu({
  hideBackBtn,
  scaning,
  takeBreak,
  newBox,
  nextPage,
  handlePopupOpen,
  onProblemsPage,
  handlePopupClose,
}) {
  const navigate = useNavigate();
  function prevPage() {
    handlePopupClose ? handlePopupClose() : {};
    navigate(-1);
  }
  return (
    <div style={onProblemsPage ? { background: '#FFA200' } : {}} className={style.Content}>
      <button
        style={hideBackBtn ? { display: 'none' } : { display: 'block' }}
        className={onProblemsPage ? `${style.BackButton} ${style.BackButtonProblems}` : style.BackButton}
        onClick={prevPage}
      >
        Назад
      </button>
      <div style={!scaning ? { display: 'none' } : { display: 'block' }} className={style.KeyboardBlock} onClick={handlePopupOpen}>
        <img src={keyboardIcon} alt="Иконка клавиатуры" />
        <button style={onProblemsPage ? { background: '#FFA200' } : {}} className={style.KeyboardButton}>
          Ввести с клавиатуры
        </button>
      </div>
      <div style={!newBox ? { display: 'none' } : { display: 'block' }} className={style.NewBox} onClick={nextPage}>
        <button className={style.KeyboardButton}>Нужна ещё одна коробка</button>
      </div>
      <div style={!takeBreak ? { display: 'none' } : { display: 'block' }} className={style.KeyboardBlock} onClick={nextPage} />
    </div>
  );
}
