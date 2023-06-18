import style from './PackingFollowingBoxPage.module.css';
import MainButton from '../MainButton/MainButton';
import PackingFollowingBox from '../PackingFollowingBox/PackingFollowingBox';
import BottomMenu from '../BottomMenu/BottomMenu';

export default function PackingFollowingBoxPage({ nextPage, prevPage }) {
  const [isDisabled, setDisabled] = useState(true);
  const productInNewBox = [];

  function addproductInNewBox(activeProduct) {
    productInNewBox.push(activeProduct);
    setDisabled(false);
    console.log(productInNewBox);
  }

  console.log(productInNewBox);
  return (
    <>
      <div className={style.PackingFollowingBoxPage}>
        <MainButton text={'Есть проблема'} />
        <PackingFollowingBox addproductInNewBox={addproductInNewBox} />
        <MainButton styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} nextPage={nextPage} isDisabled={isDisabled} />
      </div>
      <BottomMenu newBox={true} prevPage={prevPage} />
    </>
  );
}
