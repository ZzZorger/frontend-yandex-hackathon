import style from './BoxFillingPage.module.css';
import boxOpen from './image/box open.png';

import MainButton from '../MainButton/MainButton';

export default function BoxFillingPage() {
  return (
    <>
      <MainButton text={'Есть проблема'} />
      <div className={style.BoxFilling}>
        <h2 className={style.BoxFillingText}>
          {' '}
          Заполните пустоты бумагой <br />и закройте коробку
        </h2>
        <img src={boxOpen} />
      </div>
      <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Закрыть коробку`} />
    </>
  );
}
