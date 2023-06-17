import style from './TaskSearchPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';
import newOrder from '../../utilitis/newOrder.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function TaskSearchPage({ newCells }) {
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setTimeout(() => navigate('/scan-cell'), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // setTimeout(() => navigate('/scan-cell'), 5000);
  localStorage.setItem('cells', JSON.stringify(newCells));
  // на этой странице посылается запрос на бэк, на поиск задания
  // в ответ приходит json формат с ячейками
  // для того чтобы не перегружать запросами сервер, стоит задержка в 5 секунд

  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Поиск задания</h2>
      <p className={style.Subtitle}>Обычно это занимает не больше минуты</p>
      <progress className={style.Progress} />
      <StagesBar stage={3} />
      <BottomMenu takeBreak={true} />
    </main>
  );
}
