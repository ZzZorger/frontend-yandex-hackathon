import style from './ButtonsSet.module.css';
import ChoiсeButton from '../ChoiсeButton/ChoiсeButton';
import TableButton from '../TableButton/TableButton';

// Набор из ChoiceButton

export default function ButtonsSet({ btnType, nextPage, set, btnStyle, setStyle, routes, handlePopupOpen, statuses, postTable, newId }) {
  // console.log(statuses);

  if (btnType === 'TableButton') {
    return (
      <div style={setStyle} className={style.TableGrid}>
        {set.map((text, i) => (
          <TableButton key={i} id={newId[i]} styles={btnStyle} text={text} available={statuses[i]} postTable={postTable} />
        ))}
      </div>
    );
  }

  return (
    <div style={setStyle} className={style.TableGrid}>
      {set.map((text, i) => (
        <ChoiсeButton
          key={i}
          id={i + 1}
          styles={btnStyle}
          text={text}
          route={routes ? routes[i] : nextPage}
          handlePopupOpen={handlePopupOpen}
          available={statuses[i]}
          postTable={postTable}
        />
      ))}
    </div>
  );
}
