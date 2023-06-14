import style from './PackingFollowingBoxPage.module.css';
import MainButton from '../MainButton/MainButton';
import PackingFollowingBox from '../PackingFollowingBox/PackingFollowingBox';
import BottomMenu from '../BottomMenu/BottomMenu';

export default function PackingFollowingBoxPage({ nextPage, prevPage }) {
  return (
    <>
      <div className={style.PackingFollowingBoxPage}>
        <MainButton text={'Есть проблема'} />
        <PackingFollowingBox />
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} nextPage={nextPage} />
      </div>
      <BottomMenu newBox={true} prevPage={prevPage} />
    </>
  );
}
