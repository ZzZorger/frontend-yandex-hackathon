import style from './BoxFillingPage.module.css';
import boxOpen from '../../images/boxOpen.png';
import MainButton from '../../components/MainButton/MainButton';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

export default function BoxFillingPage({ prevPage }) {
  return (
    <div className={style.BoxFillingPage}>
      <div className={style.BoxFillingContent}>
        <MainButton text={'Есть проблема'} />
        <div className={style.BoxFilling}>
          <h2 className={style.BoxFillingHeader}>Заполните пустоты бумагой</h2>
          <span className={style.BoxFillingText}>закройте коробку или просканируйте ещё одну</span>
          <img src={boxOpen} />
        </div>
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Коробка закрыта`} />
      </div>
      <BottomMenu newBox={true} prevPage={prevPage} />
    </div>
  );
}
