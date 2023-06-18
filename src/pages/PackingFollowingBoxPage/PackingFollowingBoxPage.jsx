import style from './PackingFollowingBoxPage.module.css';
import MainButton from '../../components/MainButton/MainButton';
import PackingFollowingBox from '../../components/PackingFollowingBox/PackingFollowingBox';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import { useState } from 'react';
import postBox from '../../requests';

let productInNewBox = [];
let productInMainBox = [];

export default function PackingFollowingBoxPage({ nextPage, prevPage }) {
  const [isDisabled, setDisabled] = useState(true);
  const order = JSON.parse(localStorage.getItem('order'));

  function addproductInNewBox(activeProduct) {
    console.log('я тут');
    productInNewBox.push(activeProduct);
    setDisabled(false);
  }

  function preparingDataForTheRequest() {
    const s = new Set(productInNewBox.map((e) => JSON.stringify(e)));
    const product = order.skus.filter((e) => !s.has(JSON.stringify(e)));
    productInMainBox.push({ sku: product[0].sku, packaging_number: 1 });
    // console.log(productInMainBox);
    // console.log(productInNewBox);
  }

  const sendDtailsORder = () => {
    preparingDataForTheRequest();
    postBox(productInNewBox, productInMainBox);
  };

  return (
    <>
      <div className={style.PackingFollowingBoxPage}>
        <MainButton text={'Есть проблема'} />
        <PackingFollowingBox addproductInNewBox={addproductInNewBox} />
        <MainButton
          onClick={sendDtailsORder}
          styles={{ background: 'var(--active-bg-elem)' }}
          text={`Заказ собран`}
          nextPage={nextPage}
          isDisabled={isDisabled}
        />
      </div>
      <BottomMenu newBox={true} prevPage={prevPage} />
    </>
  );
}
