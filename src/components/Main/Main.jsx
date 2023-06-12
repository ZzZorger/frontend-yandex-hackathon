import style from './Main.module.css';

import OperationSelectorPage from '../OperationSelectorPage/OperationSelectorPage';
import ScanTablePage from '../ScanTablePage/ScanTablePage';
import ScanPrinterPage from '../ScanPrinterPage/ScanPrinterPage';
import TaskSearchPage from '../TaskSearchPage/TaskSearchPage';
import ScanProductPage from '../ScanProductPage/ScanProductPage';
import BoxFillingPage from '../BoxFillingPage/BoxFillingPage';
import EndAssemblyPage from '../EndAssemblyPage/EndAssemblyPage';
import ScanBoxPage from '../ScanBoxPage/ScanBoxPage';
import ScanCellPage from '../ScanCellPage/ScanCellPage';

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
  const cells = ['B-09', 'B-10', 'B-11', 'B-10', 'B-11'];
  // const cells = ['B-09'];
  function Page() {
    // if (props.onPath === props.path[0]) {
    //   return <OperationSelectorPage nextPage={props.nextPage} operations={operations} progress={progress} />;
    // } else if (props.onPath === props.path[1]) {
    //   return <ScanTablePage nextPage={props.nextPage} tables={tables} prevPage={props.prevPage} />;
    // } else if (props.onPath === props.path[2]) {
    //   return (
    //     <ScanPrinterPage
    //       nextPage={props.nextPage}
    //       prevPage={props.prevPage}
    //       openPopup={props.openPopup}
    //       handlePopupOpen={props.handlePopupOpen}
    //       handlePopupClose={props.handlePopupClose}
    //     />
    //   );
    // } else if (props.onPath === props.path[3]) {
    //   return <TaskSearchPage nextPage={props.nextPage} prevPage={props.prevPage} />;
    // } else if (props.onPath === props.path[4]) {
    //   return (
    //     <ScanCellPage
    //       nextPage={props.nextPage}
    //       openPopup={props.openPopup}
    //       handlePopupOpen={props.handlePopupOpen}
    //       handlePopupClose={props.handlePopupClose}
    //       cells={cells}
    //     />
    //   );
    // }
    return (
      <ScanCellPage
        nextPage={props.nextPage}
        openPopup={props.openPopup}
        handlePopupOpen={props.handlePopupOpen}
        handlePopupClose={props.handlePopupClose}
        cells={cells}
      />
    );

    // return <ScanBoxPage nextPage={props.nextPage} prevPage={props.prevPage} />;
    // return <BoxFillingPage nextPage={props.nextPage} prevPage={props.prevPage} />;
    // return <EndAssemblyPage nextPage={props.nextPage} prevPage={props.prevPage} />;
  }
  return <Page />;
}
