import style from './ButtonsSet.module.css';
import ChoiсeButton from '../ChoiсeButton/ChoiсeButton';

// Набор из ChoiceButton

export default function ButtonsSet({ nextPage, set }) {
  return (
    <div className={style.TableGrid}>
      {set.map((text, i) => (
        <ChoiсeButton key={i} text={text} nextPage={nextPage} />
      ))}
    </div>
  );
}
