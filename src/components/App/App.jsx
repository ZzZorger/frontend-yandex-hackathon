import { useNavigate, Routes, Route, Link, Navigate } from 'react-router-dom';

import Header from '../Header/Header.jsx';
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
import ProblemsInitialPage from '../../pages/ProblemsFlow/ProblemsInitialPage/ProblemsInitialPage';
import OtherProblemsPage from '../../pages/ProblemsFlow/OtherProblemsPage/OtherProblemsPage';

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
          <Route exact path="/" element={<Navigate to="/operation" />} />
          <Route path="/operation" element={<OperationSelectorPage operations={operations} progress={progress} nextPage="/table" />} />
          <Route path="/table" element={<ScanTablePage tables={tables} nextPage="/printer" />} />
          <Route
            path="/printer"
            element={
              <ScanPrinterPage
                nextPage="/task"
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
