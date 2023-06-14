import style from './ProblemsInitialPage.module.css';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import ButtonsSet from '../../../components/ButtonsSet/ButtonsSet';
// import ButtonsSetProblems from '../../components/ButtonsSetProblems/ButtonsSetProblems';

export default function ProblemsInitialPage({ prevPage, problems, text, routes }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>{text}</h2>
      <ButtonsSet set={problems} btnStyle={{ width: '1120px' }} setStyle={{ flexDirection: 'column', gap: '24px' }} routes={routes} />
      <BottomMenu prevPage={prevPage} onProblemsPage={true} />
    </main>
  );
}

{
  /* <h2 className={style.Title}>{text}</h2>
      <ButtonsSet
        set={problems}
        btnStyle={{ width: '1120px' }}
        setStyle={{ flexDirection: 'column', gap: '24px', paddingBottom: '296px' }}
        routes={['/no_goods', '/defect', '/other_problems']}
      />
      <BottomMenu prevPage={prevPage} onProblemsPage={true} /> */
}

// setStyle={{ flexDirection: 'column', gap: '24px', paddingBottom: '296px' }}
