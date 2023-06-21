import MainButton from '../../components/MainButton/MainButton';
import style from './EndAssemblyPage.module.css';
import done from '../../images/indexKachestva.jpg';
// import postCollectedOrder from '../../postCollectedOrder';
import { api } from '../../utilitis/Api.js';

export default function EndAssemblyPage() {
  function hemdelEndWork() {
    api.patchCollectedOrderStatus(JSON.parse(localStorage.getItem('orderkey')));
  }

  return (
    <div className={style.EndAssemblyContent}>
      <MainButton styles={{ visibility: 'hidden ' }} />
      <div className={style.EndAssembly}>
        <img src={done} />
        {/* условие для надписи "Поставьте пакет на конвейер" */}
        <h2 className={style.EndAssemblyHeader}>Поставьте коробку на конвейер</h2>
        <span className={style.EndAssemblyText}>Отличная работа!</span>
      </div>
      <MainButton onClick={hemdelEndWork} styles={{ background: 'var(--active-bg-elem)' }} text={'Готово'} linkPath="/task" />
    </div>
  );
}
