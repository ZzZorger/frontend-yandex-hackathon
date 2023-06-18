import style from './PackingFollowingBoxPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import PackingFollowingBox from '../../components/PackingFollowingBox/PackingFollowingBox';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import { useState } from 'react';
import { postBox } from '../../requests';

let productInNewBox = [];

export default function PackingFollowingBoxPage({ nextPage, prevPage }) {
  const [isDisabled, setDisabled] = useState(true);
  const order = JSON.parse(localStorage.getItem('order'));

  function addproductInNewBox(activeProduct) {
    console.log('я тут');
    productInNewBox.push(activeProduct);
    setDisabled(false);
  }

  const sendDtailsORder = () => {
    postBox(productInNewBox);
    console.log('отправляем запрос');
  };

  return (
    <>
      <div className={style.PackingFollowingBoxPage}>
        <MainButton text={'Есть проблема'} />
        <PackingFollowingBox addproductInNewBox={addproductInNewBox} />
        <MainButton onClick={sendDtailsORder} styles={{ background: 'var(--active-bg-elem)' }} text={`Заказ собран`} linkPath={nextPage} />
      </div>
      <BottomMenu newBox={true} prevPage={prevPage} />
    </>
  );
}
