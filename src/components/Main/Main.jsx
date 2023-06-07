import style from './Main.module.css';

import OperationSelectorPage from '../OperationSelectorPage/OperationSelectorPage';
import ScanTablePage from '../ScanTablePage/ScanTablePage';
import ScanProductPage from '../ScanProductPage/ScanProductPage';
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
  const progress = {
    maxValue: 200,
    value: 125,
    operationsNum: 16,
  };
  const tables = [
    'AD14PACK',
    'AD1UPACK',
    'APACK',
    'APACK2',
    'AUTOPACK1',
    'GAVPACK1',
    'IPACK',
    'LTPACK',
    'NEW_PACK',
    'NON_PACK',
    'NON_PACK_AL',
    'PACK-1',
    'PACK-2',
  ];
  function Page() {
    if (props.onPath === props.path[0]) {
      return <OperationSelectorPage nextPage={props.nextPage} operations={operations} progress={progress} />;
    } else if (props.onPath === props.path[1]) {
      return <ScanTablePage nextPage={props.nextPage} tables={tables} />;
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
