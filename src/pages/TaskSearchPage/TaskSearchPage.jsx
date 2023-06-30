import style from './TaskSearchPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import newOrder from '../../utilitis/newOrder.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../utilitis/Api.js';
import BrigadierPopup from '../../components/BrigadierPopup/BrigadierPopup';

export default function TaskSearchPage({ openBrigadierPopup, handleBrigadierPopupOpen, handlePopupClose }) {
  const navigate = useNavigate();
  const token_ex = localStorage.getItem('token');
  useEffect(() => {
    let timer = setTimeout(
      () =>
        api
          .getOrder(token_ex)
          .then((res) => {
            localStorage.setItem('cells', JSON.stringify(res.cells));
            localStorage.setItem('orderkey', res.oldest_order);
            navigate('/scan-cell');
          })
          .catch((err) => {
            handleBrigadierPopupOpen();
            console.log(`Ошибка: ${err}`);
          }),
      2000,
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // на этой странице посылается запрос на бэк, на поиск задания
  // в ответ приходит json формат с ячейками
  // для того чтобы не перегружать запросами сервер, стоит задержка в 5 секунд

  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Поиск задания</h2>
      <p className={style.Subtitle}>Обычно это занимает не больше минуты</p>
      <progress className={style.Progress} />
      <StagesBar stage={3} />
      <BottomMenu takeBreak={true} handlePopupClose={handlePopupClose} />
      <BrigadierPopup
        isOpen={openBrigadierPopup}
        onClose={handlePopupClose}
        title={'Ой, что то пошло не так:'}
        subtitle={'для выбранного стола нет свободных заказов'}
      />
    </main>
  );
}
