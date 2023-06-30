import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';
import { useState } from 'react';
import OperationSelectorPage from '../../pages/OperationSelectorPage/OperationSelectorPage.jsx';
import ScanTablePage from '../../pages/ScanTablePage/ScanTablePage.jsx';
import { api } from '../../utilitis/Api.js';

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
import operations from '../../utilitis/operations.json';
import barcodPrinter from '../../images/barcodePrinter.svg';
import passportImg from '../../images/passport.svg';
import SearchNewBoxPage from '../../pages/SearchNewBoxPage/SearchNewBoxPage.jsx';

function App() {
  const navigate = useNavigate();
  const initialProblems = ['Нет товара', 'Товар бракованный', 'Другая проблема'];
  const otherProblems = ['Сломан монитор', 'Сломан сканер', 'Сломан принтер', 'Позвать бригадира'];
  const [openBarcodePopup, setOpenBarcodePopup] = useState(false);
  const [openBrigadierPopup, setOpenBrigadierPopup] = useState(false);
  function handleLogin(barcode) {
    api
      .getUserToken(barcode)
      .then((res) => {
        localStorage.setItem('token', res.token);
        navigate('/operation');
      })
      .catch((err) => {
        setOpenBrigadierPopup(true);
        console.log(`Ошибка: ${err}`);
      });
  }
  function handlePrinterScan(barcode) {
    api
      .postPrinter(barcode, localStorage.getItem('token'))
      .then(() => {
        navigate('/task');
      })
      .catch((err) => {
        setOpenBrigadierPopup(true);
        console.log(`Ошибка: ${err}`);
      });
  }
  function handleGetOrderDetails(orderkey) {
    api
      .getOrderDetails(localStorage.getItem('token'), orderkey)
      .then((res) => {
        localStorage.setItem('order', JSON.stringify(res));
      })
      .then(() => {
        navigate('/scan-goods');
      })
      .catch((err) => {
        setOpenBrigadierPopup(true);
        console.log(`Ошибка: ${err}`);
      });
  }
  function handlePatchCollectedOrderData() {
    const order = JSON.parse(localStorage.getItem('order'));
    const orderkey = order.orderkey;
    const cartonTypes = [order.recommended_cartontype.barcode];
    const skus = {
      sku: order.skus[0].sku,
      packaging_number: 0,
    };
    api
      .patchCollectedOrderData(orderkey, cartonTypes, cartonTypes.length, skus)
      .then(() => {
        navigate('/scan-package');
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

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
          <Route exact path="/" element={<Navigate to="/authorization" />} />
          <Route
            path="/authorization"
            element={
              <ScanPrinterPage
                openBarcodePopup={openBarcodePopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
                titleText="Отсканируйте ваш бэйдж"
                imgSrc={passportImg}
                titleStyle={{ paddingBottom: '55px' }}
                popupText="Введите штрихкод бэйджа"
                initValue="ad481436-a8da-467a-96fc-167e3e999fb5"
                handleLogin={handleLogin}
                openBrigadierPopup={openBrigadierPopup}
              />
            }
          />
          <Route path="/operation" element={<OperationSelectorPage operations={operations} nextPage="/table" />} />
          <Route path="/table" element={<ScanTablePage nextPage="/printer" />} />
          <Route
            path="/printer"
            element={
              <ScanPrinterPage
                openBarcodePopup={openBarcodePopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
                titleText="Отсканируйте принтер"
                imgSrc={barcodPrinter}
                titleStyle={{ paddingBottom: '100px' }}
                stagesBar={true}
                popupText="Введите штрихкод принтера"
                initValue="99e4e092-15e5-4391-803c-dcba23e5e9fa"
                handleLogin={handlePrinterScan}
                openBrigadierPopup={openBrigadierPopup}
              />
            }
          />
          <Route
            path="/task"
            element={
              <TaskSearchPage
                openBrigadierPopup={openBrigadierPopup}
                handleBrigadierPopupOpen={handleBrigadierPopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route
            path="/scan-cell"
            element={
              <ScanCellPage
                openBarcodePopup={openBarcodePopup}
                openBrigadierPopup={openBrigadierPopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
                handleGetOrderDetails={handleGetOrderDetails}
                initValue={localStorage.getItem('orderkey')}
              />
            }
          />
          <Route path="/scan-goods" element={<ScanProductPage onCollectedOrder={handlePatchCollectedOrderData} />} />
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
          <Route path="/fill-box" element={<BoxFillingPage />} />
          <Route
            path="/searchnewbox"
            element={
              <SearchNewBoxPage
                nextPage="/in-new-box"
                openBarcodePopup={openBarcodePopup}
                handleBarcodePopupOpen={handleBarcodePopupOpen}
                handlePopupClose={handlePopupClose}
              />
            }
          />
          <Route path="/in-new-box" element={<PackingFollowingBoxPage nextPage="/end-task" />} />
          <Route path="/end-task" element={<EndAssemblyPage />} />

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
