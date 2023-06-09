import React, { useState } from 'react';
import style from './ListItemProducts.module.css';
import IMEI from '../HintЕlement/image/IMEI.svg';
import Mark from '../HintЕlement/image/Mark.svg';
import HintЕlement from '../HintЕlement/HintЕlement';

// Используемые подсказки
const bubbleWrap = {
  text: 'Пузырчатая плёнка',
  style: {
    backgroundColor: '#E0EEFF',
  },
};
const stretch = {
  text: 'Стрейтч-плёнка',
  style: {
    backgroundColor: '#FFECCC',
  },
};
// Подсказки которые будут на проде( в наших данных такой информации нет)
const pack = {
  text: 'Пакет',
  style: {
    backgroundColor: '#FFECCC',
  },
};
const imei = {
  text: 'Отсканируйте IMEI',
  img: IMEI,
  style: {
    backgroundColor: '#FFD9DB',
  },
};
const mark = {
  text: 'Отсканируйте IMEI',
  img: Mark,
  style: {
    backgroundColor: '#FFD9DB',
  },
};

export default function ListItemProducts() {
  const [isActive, setIsActive] = useState(false);

  const targetsStyle = () => {
    setIsActive((current) => !current);
  };
  return (
    <li
      className={style.productItem}
      onClick={targetsStyle}
      style={{
        backgroundColor: isActive ? '#F3F0E9' : '',
      }}
    >
      <div className={style.productImage}>
        <img src={'/'} alt="Изображение товара для сканирования"></img>
        <div className={style.productCounter}>{`${1} шт.`}</div>
      </div>

      <div className={style.productDescription}>
        {/* Размер блока + стили будут зависять от флагов с бека */}
        <p
          className={style.productText}
          // Добавится поле проверки с бека на наличие подсказки
          style={{
            display: isActive ? 'block' : '-webkit-box',
          }}
        >
          {'Умные часы Apple Watch Series 7 45 мм Aluminium Case, (PRODUCT)RED'}
        </p>
        {/* Условная отрисовка этого компонента, данные для компонента выше, стили зависят от флага, который придет с бека */}
        <HintЕlement styles={bubbleWrap.style} text={bubbleWrap.text} />
      </div>
    </li>
  );
}
