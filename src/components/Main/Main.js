import style from './Main.module.css';

import ScanProductPage from '../ScanProductPage/ScanProductPage';
import StartPage from '../StartPage/StartPage.js';

export default function Main(props) {
  function Page() {
    if (props.onPath === props.path[0]) {
      return <StartPage nextPage={props.nextPage} />;
    } else if (props.onPath === props.path[1]) {
      return <ScanProductPage nextPage={props.nextPage} />;
    } else if (props.onPath === props.path[2]) {
      return <ScanProductPage nextPage={props.nextPage} />;
    } else if (props.onPath === props.path[3]) {
      return <ScanProductPage nextPage={props.nextPage} />;
    } else if (props.onPath === props.path[4]) {
      return <ScanProductPage nextPage={props.nextPage} />;
    }
  }
  return (
    <div className={style.Main}>
      <Page />
    </div>
  );
}
