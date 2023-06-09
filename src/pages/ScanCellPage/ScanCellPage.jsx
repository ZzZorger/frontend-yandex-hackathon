import style from './ScanCellPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
import MainButton from '../../components/MainButton/MainButton';
import BrigadierPopup from '../../components/BrigadierPopup/BrigadierPopup';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ScanCellPage({
  nextPage,
  openBarcodePopup,
  openBrigadierPopup,
  handleBarcodePopupOpen,
  handleBrigadierPopupOpen,
  handlePopupClose,
  handleGetOrderDetails,
}) {
  // console.log(localStorage.getItem('orderkey'));
  const navigate = useNavigate();
  const [navigateParam, setNavigateParam] = useState('');
  useEffect(() => {
    navigate(navigateParam);
  }, [navigateParam]);

  const cellsArray = JSON.parse(localStorage.getItem('cells'));

  const cellsArrayNames = [];
  const cellsArrayBarcodes = [];

  for (let i = 0; i < cellsArray.length; i++) {
    cellsArrayNames.push(cellsArray[i].name);
    cellsArrayBarcodes.push(cellsArray[i].barcode);
  }
  function submitCell(barcode, newStyles) {
    if (cellsArrayBarcodes.length > 1) {
      for (let i = 0; i < cellsArrayBarcodes.length; i++) {
        if (cellsArrayBarcodes[i] === barcode) {
          let scanningCell = document.getElementById(cellsArrayBarcodes[i]);
          scanningCell.style.color = newStyles.color;
          scanningCell.style.background = newStyles.background;
          if (i === cellsArrayBarcodes.length - 1) {
            handleGetOrderDetails(localStorage.getItem('orderkey'));
            // setNavigateParam('/scan-goods');
          }
        }
      }
    } else if (cellsArrayBarcodes.length === 1) {
      handleGetOrderDetails(localStorage.getItem('orderkey'));
      // setNavigateParam('/scan-goods');
    }
  }
  // после сканирования всех ячеек, отправляется запрос на заказ
  return (
    <main className={style.Content}>
      <MainButton styles={{ position: 'absolute', left: '24px', marginTop: '83px' }} text={'Есть проблема'} linkPath="/problems" />
      <h2 className={style.Title}>{cellsArrayNames.length > 1 ? 'Сканируйте ячейки' : 'Сканируйте ячейку'}</h2>
      <div className={style.CellsSection}>
        {cellsArrayNames.length === 1 ? (
          <p className={style.Cell}>{cellsArrayNames[0]}</p>
        ) : (
          cellsArrayNames.map((text, i) => (
            <p key={i} id={cellsArrayBarcodes[i]} className={`${style.Cell} ${style.RowCell}`}>
              {text}
            </p>
          ))
        )}
      </div>
      <BottomMenu hideBackBtn={true} scaning={true} handlePopupOpen={handleBarcodePopupOpen} />
      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        // onSubmit={nextPage}
        title={'Введите штрихкод ячейки'}
        initValue={'e66502c0-e4cf-42bd-b56b-79ed05833667'}
        onSubmitButton={submitCell}
      />
      <BrigadierPopup isOpen={openBrigadierPopup} />
    </main>
  );
}
