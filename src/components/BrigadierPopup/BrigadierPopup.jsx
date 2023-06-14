import style from './BrigadierPopup.module.css';

export default function BrigadierPopup(props) {
  return (
    <div className={`${style.Popup} ${props.isOpen && style.PopupOpened}`}>
      <div className={style.Content}></div>
    </div>
  );
}
