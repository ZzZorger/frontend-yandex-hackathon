import MainButton from '../MainButton/MainButton';
import style from './EndAssemblyPage.module.css';
import done from './Image/03. Индекс качества_ 2.jpg';

export default function EndAssemblyPage() {
  return (
    <>
      <MainButton styles={{ visibility: 'hidden ' }} />
      <div className={style.EndAssembly}>
        <img src={done} />
        {/* условие для надписи "Поставьте пакет на конвейер" */}
        <h2 className={style.EndAssemblyHeader}>Поставьте коробку на конвейер</h2>
        <span className={style.EndAssemblyText}>Отличная работа!</span>
      </div>
      <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={'Готово'} />
    </>
  );
}
