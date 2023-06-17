import style from './TaskSearchPage.module.css';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import StagesBar from '../../components/StagesBar/StagesBar';

export default function TaskSearchPage({ newCells }) {
  localStorage.setItem('cells', JSON.stringify(newCells));
  // на этой странице посылается запрос на бэк, на поиск задания
  // в ответ приходит json формат заказа
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
