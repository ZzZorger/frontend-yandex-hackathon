import MainButton from '../../components/MainButton/MainButton';
import style from './EndAssemblyPage.module.css';
import done from '../../images/indexKachestva.jpg';

export default function EndAssemblyPage() {
  return (
    <div className={style.EndAssemblyContent}>
      <MainButton styles={{ visibility: 'hidden ' }} />
      <div className={style.EndAssembly}>
        <img src={done} />
        {/* условие для надписи "Поставьте пакет на конвейер" */}
        <h2 className={style.EndAssemblyHeader}>Поставьте коробку на конвейер</h2>
        <span className={style.EndAssemblyText}>Отличная работа!</span>
      </div>
      <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={'Готово'} />
    </div>
  );
}
