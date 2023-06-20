import style from './ProblemWithTheOrderPage.module.css';
import ListProductInNewBox from '../../../components/ListProductInNewBox/ListProductInNewBox';
import MainButton from '../../../components/MainButton/MainButton';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
import { Fragment } from 'react';

export default function ProblemWithTheOrderPage({ nextPage }) {
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
          <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Готово`} linkPath={nextPage} />
        </div>
      </div>
      <BottomMenu onProblemsPage={true} />
    </>
  );
}
