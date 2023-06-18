import style from './ButtonsSet.module.css';
import ChoiсeButton from '../ChoiсeButton/ChoiсeButton';

// Набор из ChoiceButton

export default function ButtonsSet({ nextPage, set, btnStyle, setStyle, routes, handlePopupOpen, statuses }) {
  // console.log(statuses);
  return (
    <div style={setStyle} className={style.TableGrid}>
      {set.map((text, i) => (
        <ChoiсeButton
          key={i}
          styles={btnStyle}
          text={text}
          route={routes ? routes[i] : nextPage}
          handlePopupOpen={handlePopupOpen}
          available={statuses[i]}
        />
      ))}
    </div>
  );
}
