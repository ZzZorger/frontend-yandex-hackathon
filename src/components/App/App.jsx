import { useNavigate, Routes, Route, Link, Navigate } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';
import { useState } from 'react';
import OperationSelectorPage from '../../pages/OperationSelectorPage/OperationSelectorPage';
import ScanTablePage from '../../pages/ScanTablePage/ScanTablePage';
import ScanPrinterPage from '../../pages/ScanPrinterPage/ScanPrinterPage';
import TaskSearchPage from '../../pages/TaskSearchPage/TaskSearchPage';
import ScanCellPage from '../../pages/ScanCellPage/ScanCellPage';
import ScanProductPage from '../../pages/ScanProductPage/ScanProductPage';
import BoxFillingPage from '../../pages/BoxFillingPage/BoxFillingPage';
import EndAssemblyPage from '../../pages/EndAssemblyPage/EndAssemblyPage';
import ScanBoxPage from '../../pages/ScanBoxPage/ScanBoxPage';

function App() {
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
  const cells = ['B-09', 'B-10', 'B-11'];
  const navigate = useNavigate();
  // const [onPath, setOnPath] = useState('/oper');
  const [openPopup, setOpenPopup] = useState(false);

  // const path = ['/operation', '/table', '/printer', '/task', '/scan-cell', '/scan-goods', '/scan-package', '/fill-box', '/end-task'];
  const path = ['/operation', '/table', '/printer', '/scan-cell', '/scan-goods', '/scan-package', '/fill-box', '/end-task'];
  // function nextPage() {
  //   handlePopupClose();
  //   switch (onPath) {
  //     case path[0]:
  //       setOnPath(path[1]);
  //       navigate(path[1]);
  //       break;
  //     case path[1]:
  //       setOnPath(path[2]);
  //       navigate(path[2]);
  //       break;
  //     case path[2]:
  //       setOnPath(path[3]);
  //       navigate(path[3]);
  //       break;
  //     case path[3]:
  //       setOnPath(path[4]);
  //       navigate(path[4]);
  //       break;
  //     case path[4]:
  //       setOnPath(path[0]);
  //       navigate(path[0]);
  //       break;
  //   }
  // }
  // function prevPage() {
  //   setOnPath(path[path.indexOf(onPath) - 1]);
  //   navigate(path[path.indexOf(onPath) - 1]);
  // }
  function prevPage() {
    navigate(-1);
  }
  function handlePopupOpen() {
    setOpenPopup(true);
  }
  function handlePopupClose() {
    setOpenPopup(false);
  }
  return (
    <div className="body">
      <div className="page">
        <Header />
        {/* <Header onPath={onPath} path={path} /> */}
        <Routes>
          <Route exact path="/" element={<Navigate to={path[0]} />} />
          <Route path="/operation" element={<OperationSelectorPage operations={operations} progress={progress} nextPage={path[1]} />} />
          <Route path="/table" element={<ScanTablePage tables={tables} nextPage={path[2]} prevPage={prevPage} />} />
          <Route
            path="/printer"
            element={
              <ScanPrinterPage
                nextPage={path[3]}
                prevPage={prevPage}
                openPopup={openPopup}
                handlePopupOpen={handlePopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route path="/task" element={<TaskSearchPage nextPage="/scan-cell" prevPage={prevPage} />} />
          <Route
            path="/scan-cell"
            element={
              <ScanCellPage
                nextPage={path[0]}
                openPopup={openPopup}
                handlePopupOpen={handlePopupOpen}
                handlePopupClose={handlePopupClose}
                cells={cells}
              />
            }
          />
        </Routes>

        {/* <Main
          // nextPage={nextPage}
          // prevPage={prevPage}
          // onPath={onPath}
          // path={path}
          openPopup={openPopup}
          handlePopupOpen={handlePopupOpen}
          handlePopupClose={handlePopupClose}
        /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
