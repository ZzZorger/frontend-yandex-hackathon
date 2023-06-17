import style from './ScanCellPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
import MainButton from '../../components/MainButton/MainButton';
import BrigadierPopup from '../../components/BrigadierPopup/BrigadierPopup';

export default function ScanCellPage({
  nextPage,
  openBarcodePopup,
  openBrigadierPopup,
  handleBarcodePopupOpen,
  handleBrigadierPopupOpen,
  handlePopupClose,
  cells,
}) {
  const order = JSON.parse(localStorage.getItem('order'));
  const cellsArray = [];
  for (let i = 0; i < order.cells.length; i++) {
    cellsArray.push(order.cells[i].name);
  }
  function cellScan() {}
  return (
    <main className={style.Content}>
      <MainButton styles={{ position: 'absolute', left: '24px', marginTop: '83px' }} text={'Есть проблема'} linkPath="/problems" />
      <h2 className={style.Title}>{cellsArray.length > 1 ? 'Сканируйте ячейки' : 'Сканируйте ячейку'}</h2>
      <div className={style.CellsSection}>
        {cellsArray.length === 1 ? (
          <p className={style.Cell}>{cells[0]}</p>
        ) : (
          cellsArray.map((text, i) => (
            <p key={i} className={`${style.Cell} ${style.RowCell}`}>
              {text}
            </p>
          ))
        )}
      </div>
      {/* <h2 className={style.Title}>{cells.length > 1 ? 'Сканируйте ячейки' : 'Сканируйте ячейку'}</h2>
      <div className={style.CellsSection}>
        {cells.length === 1 ? (
          <p className={style.Cell}>{cells[0]}</p>
        ) : (
          cells.map((text, i) => (
            <p key={i} className={`${style.Cell} ${style.RowCell}`}>
              {text}
            </p>
          ))
        )}
      </div> */}
      <BottomMenu hideBackBtn={true} scaning={true} handlePopupOpen={handleBarcodePopupOpen} />
      <BarcodePopup
        isOpen={openBarcodePopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={'Введите штрихкод ячейки'}
        initValue={'9234 5678 234 32'}
      />
      <BrigadierPopup isOpen={openBrigadierPopup} />
    </main>
  );
}
