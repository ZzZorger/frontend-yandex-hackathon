import style from './ScanForemanPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import MainButton from '../../../components/MainButton/MainButton';
import ListItemProducts from '../../../components/ListItemProducts/ListItemProducts';
import BrigadierPopup from '../../../components/BrigadierPopup/BrigadierPopup';
import BarcodePopup from '../../../components/BarcodePopup/BarcodePopup';

export default function ScanForemanPage({
  nextPage,
  prevPage,
  openPopup,
  openBrigadierPopup,
  handlePopupOpen,
  handleBrigadierPopupOpen,
  handlePopupClose,
}) {
  const active = 'rgba(254, 212, 43, 0.3)';
  return (
    <main className={style.Content}>
      <div className={style.ScanForeman}>
        <MainButton styles={{ visibility: 'hidden ' }} />
        <div className={style.ScanForemanContent}>
          <h2 className={style.ScanForemanText}>Отсканируйте бейдж бригадира для подтверждения</h2>
          <ListItemProducts isActive={active} showText={'block'} />
        </div>

        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Позвать бригадира`} onClick={handleBrigadierPopupOpen} />
      </div>

      <BottomMenu onProblemsPage={true} scaning={true} handlePopupClose={handlePopupClose} handlePopupOpen={handlePopupOpen} />
      <BrigadierPopup isOpen={openBrigadierPopup} />
      <BarcodePopup
        isOpen={openPopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={'Введите штрихкод бейжда'}
        initValue={'9234 5678 234 32'}
      />
    </main>
    // <>
    //   <div className={style.ScanForeman}>
    //     <MainButton styles={{ visibility: 'hidden ' }} />
    //     <div className={style.ScanForemanContent}>
    //       <h2 className={style.ScanForemanText}>Отсканируйте бейдж бригадира для подтверждения</h2>
    //       <ListItemProducts isActive={active} showText={'block'} />
    //     </div>

    //     <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Позвать бригадира`} onClick={handlePopupOpen} />
    //   </div>

    //   <BottomMenu onProblemsPage={true} prevPage={prevPage} scaning={true} handlePopupClose={handlePopupClose} />
    //   <BrigadierPopup isOpen={openPopup} onClose={handlePopupClose} />
    // </>
  );
}
