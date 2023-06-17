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
  const cellsArray = JSON.parse(localStorage.getItem('cells'));
  const cellsArrayNames = [];
  for (let i = 0; i < cellsArray.cells.length; i++) {
    cellsArrayNames.push(cellsArray.cells[0].name);
  }
  function cellScan() {}
  return (
    <main className={style.Content}>
      <MainButton styles={{ position: 'absolute', left: '24px', marginTop: '83px' }} text={'Есть проблема'} linkPath="/problems" />
      <h2 className={style.Title}>{cellsArrayNames.length > 1 ? 'Сканируйте ячейки' : 'Сканируйте ячейку'}</h2>
      <div className={style.CellsSection}>
        {cellsArrayNames.length === 1 ? (
          <p className={style.Cell}>{cellsArrayNames[0]}</p>
        ) : (
          cellsArrayNames.map((text, i) => (
            <p key={i} className={`${style.Cell} ${style.RowCell}`}>
              {text}
            </p>
          ))
        )}
      </div>
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
