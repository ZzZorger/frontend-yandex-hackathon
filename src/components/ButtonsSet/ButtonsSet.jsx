import style from './ButtonsSet.module.css';
import ChoiсeButton from '../ChoiсeButton/ChoiсeButton';
import { Link } from 'react-router-dom';

// Набор из ChoiceButton

export default function ButtonsSet({ nextPage, set, btnStyle, setStyle, routes }) {
  return (
    <div style={setStyle} className={style.TableGrid}>
      {set.map((text, i) => (
        // <ChoiсeButton key={i} styles={btnStyle} text={text} nextPage={nextPage} route={routes ? routes[i] : nextPage} />
        <ChoiсeButton key={i} styles={btnStyle} text={text} route={routes ? routes[i] : nextPage} />
      ))}
    </div>
  );
}
// export default function ButtonsSet({ nextPage, set, btnStyle, setStyle }) {
//   return (
//     <div style={setStyle} className={style.TableGrid}>
//       {set.map((text, i) => (
//         <ChoiсeButton styles={btnStyle} key={i} text={text} nextPage={nextPage} />
//       ))}
//     </div>
//   );
// }
