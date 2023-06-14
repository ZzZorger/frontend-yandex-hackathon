import style from './PackingFollowingBoxPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import PackingFollowingBox from '../../components/PackingFollowingBox/PackingFollowingBox';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

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
