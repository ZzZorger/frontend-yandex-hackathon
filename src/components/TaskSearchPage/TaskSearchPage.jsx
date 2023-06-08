import style from './TaskSearchPage.module.css';
import BottomMenu from '../BottomMenu/BottomMenu';
import StagesBar from '../StagesBar/StagesBar';

export default function TaskSearchPage({ nextPage, prevPage }) {
  return (
    <main className={style.Content}>
      <h2 className={style.Title}>Поиск задания</h2>
      <p className={style.Subtitle}>Обычно это занимает не больше минуты</p>
      <progress className={style.Progress} />
      <StagesBar stage={3} />
      <BottomMenu takeBreak={true} prevPage={prevPage} />
    </main>
  );
}
