import style from './ButtonsSetProblems.module.css';
import ChoiсeButton from '../ChoiсeButton/ChoiсeButton';

// Набор из ChoiceButton

export default function ButtonsSetProblems({ nextPage, set }) {
  return (
    <div className={style.TableGrid}>
      {set.map((text, i) => (
        <ChoiсeButton styles={{ width: '1120px' }} key={i} text={text} onClick={nextPage} />
      ))}
    </div>
  );
}
