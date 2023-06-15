import style from './BrigadierPopup.module.css';

export default function BrigadierPopup(props) {
  return (
    <div className={`${style.Popup} ${props.isOpen && style.PopupOpened}`}>
      <div className={style.Content}>
        <h2 className={style.Title}>Бригадир скоро подойдет</h2>
        <p className={style.Subtitle}>Подождите немного</p>
      </div>
    </div>
  );
}
