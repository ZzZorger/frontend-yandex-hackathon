import style from './ScanForemanPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import MainButton from '../../../components/MainButton/MainButton';
import ListItemProducts from '../../../components/ListItemProducts/ListItemProducts';

export default function ScanForemanPage({ nextPage, prevPage }) {
  const active = 'rgba(254, 212, 43, 0.3)';
  return (
    <>
      <div className={style.ScanForeman}>
        <MainButton styles={{ visibility: 'hidden ' }} />
        <div className={style.ScanForemanContent}>
          <h2 className={style.ScanForemanText}>Отсканируйте бейдж бригадира для подтверждения</h2>
          <ListItemProducts isActive={active} showText={'block'} />
        </div>

        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Позвать бригадира`} nextPage={nextPage} />
      </div>

      <BottomMenu onProblemsPage={true} prevPage={prevPage} scaning={true} />
    </>
  );
}
