import style from './OtherProblemsPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import ButtonsSet from '../../../components/ButtonsSet/ButtonsSet';
import BrigadierPopup from '../../../components/BrigadierPopup/BrigadierPopup';
// import ButtonsSetProblems from '../../components/ButtonsSetProblems/ButtonsSetProblems';

export default function OtherProblemsPage({ prevPage }) {
  const problems = ['Нет товара', 'Товар бракованный', 'Другая проблема'];
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Укажите проблему</h2>
      {/* <ButtonsSetProblems set={problems} /> */}
      <ButtonsSet
        set={problems}
        btnStyle={{ width: '1120px' }}
        setStyle={{ flexDirection: 'column', gap: '24px', paddingBottom: '296px' }}
        routes={['/no-goods', '/defect', '/other-problems']}
      />
      <BottomMenu prevPage={prevPage} onProblemsPage={true} />
      <BrigadierPopup />
    </main>
  );
}
