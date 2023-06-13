import style from './PackingFollowingBox.module.css';
import ListScanProducts from '../ListScanProducts/ListScanProducts';
import ListProductInNewBox from '../ListProductInNewBox/ListProductInNewBox';

export default function PackingFollowingBox() {
  return (
    <div className={style.PackingFollowingBox}>
      <div className={style.PackingFollowingBoxTitle}>
        <h2 className={style.PackingBoxHeader}>Отметьте товары в новой упаковке</h2>
        <span className={style.PackingBoxText}>возьмите ещё одну коробку, если необходимо</span>
      </div>
      <ListProductInNewBox />
    </div>
  );
}
