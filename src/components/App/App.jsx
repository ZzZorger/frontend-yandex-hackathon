import { useNavigate, Routes, Route, Link, Navigate } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';
import { useState } from 'react';
import OperationSelectorPage from '../../Pages/OperationSelectorPage/OperationSelectorPage.jsx';
import ScanTablePage from '../../Pages/ScanTablePage/ScanTablePage.jsx';
import ScanPrinterPage from '../../Pages/ScanPrinterPage/ScanPrinterPage.jsx';
import TaskSearchPage from '../../Pages/TaskSearchPage/TaskSearchPage.jsx';
import ScanCellPage from '../../Pages/ScanCellPage/ScanCellPage.jsx';
import ScanProductPage from '../../Pages/ScanProductPage/ScanProductPage.jsx';
import BoxFillingPage from '../../Pages/BoxFillingPage/BoxFillingPage.jsx';
import EndAssemblyPage from '../../Pages/EndAssemblyPage/EndAssemblyPage.jsx';
import ScanBoxPage from '../../Pages/ScanBoxPage/ScanBoxPage.jsx';
import ProblemsInitialPage from '../../Pages/ProblemsFlow/ProblemsInitialPage/ProblemsInitialPage.jsx';
import OtherProblemsPage from '../../Pages/OperationSelectorPage/OperationSelectorPage.jsx';

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
  const initialProblems = ['Нет товара', 'Товар бракованный', 'Другая проблема'];
  const otherProblems = ['Сломан монитор', 'Сломан сканер', 'Сломан принтер', 'Позвать бригадира'];
  const path = ['/operation', '/table', '/printer', '/scan-cell', '/scan-goods', '/scan-package', '/fill-box', '/end-task'];
  const [openPopup, setOpenPopup] = useState(false);
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
        <Routes>
          <Route exact path="/" element={<Navigate to={path[0]} />} />
          <Route path="/operation" element={<OperationSelectorPage operations={operations} progress={progress} nextPage={path[1]} />} />
          <Route path="/table" element={<ScanTablePage tables={tables} nextPage={path[2]} />} />
          <Route
            path="/printer"
            element={
              <ScanPrinterPage
                nextPage={path[3]}
                openPopup={openPopup}
                handlePopupOpen={handlePopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route path="/task" element={<TaskSearchPage nextPage="/scan-cell" />} />
          <Route
            path="/scan-cell"
            element={
              <ScanCellPage
                nextPage="/scan-goods"
                openPopup={openPopup}
                handlePopupOpen={handlePopupOpen}
                handlePopupClose={handlePopupClose}
                cells={cells}
              />
            }
          />
          {/* <Route path="/scan-goods" element={<ScanProductPage />} /> */}
          <Route
            path="/problems"
            element={
              <ProblemsInitialPage
                problems={initialProblems}
                text={'Укажите проблему'}
                routes={['/no-goods', '/defect', '/other-problems']}
              />
            }
          />
          <Route
            path="/other-problems"
            element={
              <ProblemsInitialPage
                problems={otherProblems}
                text={'Другая проблема'}
                routes={['/no-goods', '/defect', '/other-problems', '/no-goods', '/defect']}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
