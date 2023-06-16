import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';
import { useState } from 'react';
import OperationSelectorPage from '../../pages/OperationSelectorPage/OperationSelectorPage.jsx';
import ScanTablePage from '../../pages/ScanTablePage/ScanTablePage.jsx';
import ScanPrinterPage from '../../pages/ScanPrinterPage/ScanPrinterPage.jsx';
import TaskSearchPage from '../../pages/TaskSearchPage/TaskSearchPage.jsx';
import ScanCellPage from '../../pages/ScanCellPage/ScanCellPage.jsx';
import ScanProductPage from '../../pages/ScanProductPage/ScanProductPage.jsx';
import BoxFillingPage from '../../pages/BoxFillingPage/BoxFillingPage.jsx';
import EndAssemblyPage from '../../pages/EndAssemblyPage/EndAssemblyPage.jsx';
import ScanBoxPage from '../../pages/ScanBoxPage/ScanBoxPage.jsx';
import ProblemsInitialPage from '../../pages/ProblemsFlow/ProblemsInitialPage/ProblemsInitialPage.jsx';
import ScanForemanPage from '../../pages/ProblemsFlow/ScanForemanPage/ScanForemanPage.jsx';
import DefectItemOnConveyorPage from '../../pages/ProblemsFlow/DefectItemOnConveyorPage/DefectItemOnConveyorPage.jsx';
import NoGoodsPage from '../../pages/ProblemsFlow/NoGoodsPage/NoGoodsPage.jsx';
import ProblemWithOrderPage from '../../pages/ProblemsFlow/ProblemWithTheOrderPage/ProblemWithTheOrderPage.jsx';
import PackingFollowingBoxPage from '../../pages/PackingFollowingBoxPage/PackingFollowingBoxPage.jsx';
import newOrder from '../../utilitis/newOrder.json';

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
  // const [openPopup, setOpenPopup] = useState(false);
  const [openBarcodePopup, setOpenBarcodePopup] = useState(false);
  const [openBrigadierPopup, setOpenBrigadierPopup] = useState(false);
  function handleBarcodePopupOpen() {
    setOpenBarcodePopup(true);
  }
  function handleBrigadierPopupOpen() {
    setOpenBrigadierPopup(true);
  }
  function handlePopupClose() {
    setOpenBarcodePopup(false);
    setOpenBrigadierPopup(false);
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
                openBarcodePopup={openBarcodePopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route path="/task" element={<TaskSearchPage newOrder={newOrder} />} />
          <Route
            path="/scan-cell"
            element={
              <ScanCellPage
                nextPage="/scan-goods"
                openBarcodePopup={openBarcodePopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
                cells={cells}
              />
            }
          />
          <Route path="/scan-goods" element={<ScanProductPage nextPage="/scan-package" />} />
          <Route
            path="/scan-package"
            element={
              <ScanBoxPage
                nextPage="/fill-box"
                openBarcodePopup={openBarcodePopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route path="/fill-box" element={<BoxFillingPage nextPage="/end-task" />} />

          <Route path="/end-task" element={<PackingFollowingBoxPage />} />
          {/* <Route path="/end-task" element={<DefectItemOnConveyorPage />} /> */}

          <Route
            path="/problems"
            element={<ProblemsInitialPage problems={initialProblems} text={'Укажите проблему'} routes={['goods', 'defect', 'other']} />}
          />
          <Route path="problems/goods" element={<NoGoodsPage />} />
          <Route
            path="problems/goods/brigadier"
            element={
              <ScanForemanPage
                nextPage={''}
                openBarcodePopup={openBarcodePopup}
                openBrigadierPopup={openBrigadierPopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handleBrigadierPopupOpen={handleBrigadierPopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route path="/problems/defect" element={<ProblemWithOrderPage nextPage="conveyor" />} />
          <Route path="/problems/defect/conveyor" element={<DefectItemOnConveyorPage nextPage="/task" />} />
          <Route
            path="problems/other"
            element={
              <ProblemsInitialPage
                problems={otherProblems}
                text={'Другая проблема'}
                openBrigadierPopup={openBrigadierPopup}
                handleBrigadierPopupOpen={handleBrigadierPopupOpen}
                handlePopupClose={handlePopupClose}
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
