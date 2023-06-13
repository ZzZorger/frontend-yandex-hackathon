import style from './ScanCellPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import BarcodePopup from '../../components/BarcodePopup/BarcodePopup';
import MainButton from '../../components/MainButton/MainButton';

export default function ScanCellPage({ nextPage, openPopup, handlePopupOpen, handlePopupClose, cells }) {
  return (
    <main className={style.Content}>
      <MainButton styles={{ position: 'absolute', left: '24px', marginTop: '83px' }} text={'Есть проблема'} />
      <h2 className={style.Title}>{cells.length > 1 ? 'Сканируйте ячейки' : 'Сканируйте ячейку'}</h2>
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
      </div>
      <BottomMenu hideBackBtn={true} scaning={true} handlePopupOpen={handlePopupOpen} />
      <BarcodePopup
        isOpen={openPopup}
        onClose={handlePopupClose}
        onSubmit={nextPage}
        title={'Введите штрихкод ячейки'}
        initValue={'9234 5678 234 32'}
      />
    </main>
  );
}
