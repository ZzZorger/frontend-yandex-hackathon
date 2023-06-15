import style from './ProblemWithTheOrderPage.module.css';
import ListProductInNewBox from '../ListProductInNewBox/ListProductInNewBox';
import MainButton from '../MainButton/MainButton';
import BottomMenu from '../BottomMenu/BottomMenu';
import { Fragment } from 'react';

export default function ProblemWithTheOrderPage({ nextPage, prevPage }) {
  return (
    <>
      <div className={style.ProblemWithTheOrderPage}>
        <div className={style.ProblemWithTheOrderContent}>
          <div className={style.ProblemWithTheOrderTitle}>
            {/* <h2 className={style.ProblemWithTheOrderHeader}>Какого товара нет?</h2> */}
            <h2 className={style.ProblemWithTheOrderHeader}>
              Сканируйте <br /> бракованный товар
            </h2>
          </div>
          <ListProductInNewBox />
        </div>

        {/* отрисовка кнопки если отметили что товара нет  */}
        <div style={{ position: 'absolute', right: '25px' }}>
          <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Готово`} nextPage={nextPage} />
        </div>
      </div>
      <BottomMenu prevPage={prevPage} />
    </>
  );
}
