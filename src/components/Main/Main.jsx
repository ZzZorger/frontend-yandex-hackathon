import style from './Main.module.css';

import ScanProductPage from '../ScanProductPage/ScanProductPage';
import OperationSelectorPage from '../OperationSelectorPage/OperationSelectorPage';
import BoxFillingPage from '../BoxFillingPage/BoxFillingPage';
import EndAssemblyPage from '../EndAssemblyPage/EndAssemblyPage';

export default function Main(props) {
  const operations = [
    'Отборы',
    'Упаковка',
    'Сортировка по СД',
    'Пересоздание задания',
    'Консолидация',
    'Отгрузка',
    'Заказ пустых ТОТов',
    'Работа с пустыми ТОТами',
    'Новая упаковка',
  ];
  function Page() {
    if (props.onPath === props.path[0]) {
      return <OperationSelectorPage nextPage={props.nextPage} operations={operations} />;
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
