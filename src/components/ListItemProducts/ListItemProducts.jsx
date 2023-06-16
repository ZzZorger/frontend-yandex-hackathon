import React, { Fragment, useState } from 'react';
import style from './ListItemProducts.module.css';
import hints from '../../utilitis/hints';
import HintЕlement from '../HintЕlement/HintЕlement';
import ProgressBarInProduct from '../ProgressBarInProduct/ProgressBarInProduct';

function ListItemProducts({ activeColor, textBlok, textBox, product }) {
  const [isActive, setIsActive] = useState(false);
  // const [showText, setshowText] = useState(true);

  const handleClick = () => {
    setIsActive((current) => !current);
    // setshowText((current) => !current);
  };

  const active = isActive ? activeColor : '';
  const fullText = isActive ? textBlok : textBox;

  return (
    <li
      className={style.productItem}
      onClick={handleClick}
      style={{
        backgroundColor: active,
      }}
    >
      <div className={style.productImage}>
        <img src={product.image} alt="Изображение товара для сканирования"></img>

        {product.amount > 1 && active === 'rgba(254, 212, 43, 0.3)' ? (
          <ProgressBarInProduct fullCount={product.amount} />
        ) : (
          <div className={style.productCounter}>{`${product.amount} шт.`}</div>
        )}
      </div>

      <div className={style.productDescription}>
        {/* Размер блока + стили будут зависять от флагов с бека */}
        <p
          className={style.productText}
          // Добавится поле проверки с бека на наличие подсказки
          style={{
            display: fullText,
          }}
        >
          {product.name}
        </p>
        {/* Условная отрисовка этого компонента, данные для компонента выше, стили зависят от флага, который придет с бека */}
        <HintЕlement styles={{ backgroundColor: hints[0].backgroundColor }} text={hints[0].name} />
      </div>
    </li>
  );
}
export default React.memo(ListItemProducts);
