import style from './ProblemsInitialPage.module.css';
import BottomMenu from '../../BottomMenu/BottomMenu';
import ButtonsSetProblems from '../ButtonsSetProblems/ButtonsSetProblems.jsx';

export default function ProblemsInitialPage({ nextPage, tables, prevPage }) {
  const problems = ['Нет товара', 'Товар бракованный', 'Другая проблема'];
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Укажите проблему</h2>
      <ButtonsSetProblems set={problems} />
      <BottomMenu prevPage={prevPage} onProblemsPage={true} />
    </main>
  );
}
