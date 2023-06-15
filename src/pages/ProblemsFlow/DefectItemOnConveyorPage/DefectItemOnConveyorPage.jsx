import style from './DefectItemOnConveyorPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import MainButton from '../../../components/MainButton/MainButton';
import container from './image/telegram-cloud-photo-size-2-5265187661159708678-y 3 (1).jpg';

export default function DefectItemOnConveyorPage({ nextPage, prevPage }) {
  return (
    <>
      <div className={style.DefectItemOnConveyor}>
        <MainButton styles={{ visibility: 'hidden ' }} />
        <div className={style.DefectItemOnConveyorContent}>
          <img className={style.DefectItemOnConveyorImage} src={container} alt="Изображение желтого контейнера" />
          <h2 className={style.DefectItemOnConveyorHeader}>
            Положите бракованные товары <br /> в тару и ставьте её на конвейер
          </h2>
          <span className={style.DefectItemOnConveyorText}>Отличная работа!</span>
        </div>
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Готово`} nextPage={nextPage} />
      </div>
      <BottomMenu onProblemsPage={true} prevPage={prevPage} />
    </>
  );
}
