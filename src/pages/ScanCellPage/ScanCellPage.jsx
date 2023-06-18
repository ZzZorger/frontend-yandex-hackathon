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
}) {
  const navigate = useNavigate();
  const [navigateParam, setNavigateParam] = useState('');
  useEffect(() => {
    navigate(navigateParam);
  }, [navigateParam]);
  // const [styles, setStyles] = useState({ color: '#212121' });
  const cellsArray = JSON.parse(localStorage.getItem('cells'));
  const cellsArrayNames = [];
  const cellsArrayBarcodes = [];

  for (let i = 0; i < cellsArray.cells.length; i++) {
    cellsArrayNames.push(cellsArray.cells[i].name);
    cellsArrayBarcodes.push(cellsArray.cells[i].barcode);
  }
  function submitCell(barcode, newStyles) {
    if (cellsArrayBarcodes.length > 1) {
      for (let i = 0; i < cellsArrayBarcodes.length; i++) {
        if (cellsArrayBarcodes[i] === barcode) {
          let scanningCell = document.getElementById(cellsArrayBarcodes[i]);
          // console.log(scanningCell);
          scanningCell.style.color = newStyles.color;
          scanningCell.style.background = newStyles.background;
          // console.log(i, cellsArrayBarcodes.length);
          if (i === cellsArrayBarcodes.length - 1) {
            // console.log('last scan');
            // navigate('/scan-goods');
            setNavigateParam('/scan-goods');
          }
        }
        // if ((i = cellsArrayBarcodes.length - 1)) {
        //   navigate('/scan-goods');
        // }
      }
    } else if (cellsArrayBarcodes.length === 1) {
      setNavigateParam('/scan-goods');
    }
    // navigate('/scan-goods');
    // setNavigateParam('/scan-goods');
    // console.log('next');
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
        initValue={'9234 5678 234 32'}
        onSubmitButton={submitCell}
      />
      <BrigadierPopup isOpen={openBrigadierPopup} />
    </main>
  );
}
