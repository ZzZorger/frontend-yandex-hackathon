import style from './ProblemsInitialPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import ButtonsSet from '../../../components/ButtonsSet/ButtonsSet';
import BrigadierPopup from '../../../components/BrigadierPopup/BrigadierPopup';

export default function ProblemsInitialPage({ prevPage, problems, text, routes, openPopup, handlePopupOpen, handlePopupClose }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>{text}</h2>
      <ButtonsSet
        set={problems}
        btnStyle={{ width: '1120px' }}
        setStyle={{ flexDirection: 'column', gap: '24px' }}
        routes={routes}
        handlePopupOpen={handlePopupOpen}
      />
      <BottomMenu prevPage={prevPage} onProblemsPage={true} handlePopupClose={handlePopupClose} />
      <BrigadierPopup isOpen={openPopup} onClose={handlePopupClose} />
    </main>
  );
}
