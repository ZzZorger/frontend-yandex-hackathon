import { useState } from 'react';
import ListItemProducts from '../ListItemProducts/ListItemProducts';
import style from './ListScanProducts.module.css';

export default function ListScanProducts() {
  const [isActive, setIsActive] = useState(false);
  // const [showText, setshowText] = useState(true);

  const targetsStyle = () => {
    setIsActive((current) => !current);
    // setshowText((current) => !current);
  };
  const active = isActive ? '#F3F0E9' : '';
  const fullText = isActive ? 'block' : '-webkit-box';
  // через map + потестить при большом кол-ве айтемов
  return (
    <ul className={style.ListProducts}>
      <ListItemProducts targetsStyle={targetsStyle} isActive={active} showText={fullText} />
    </ul>
  );
}
