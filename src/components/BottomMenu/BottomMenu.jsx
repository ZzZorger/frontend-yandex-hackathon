import style from './BottomMenu.module.css';

export default function BottomMenu() {
  return (
    <div className={style.Content}>
      <button className={style.BackButton}>Назад</button>
    </div>
  );
}
