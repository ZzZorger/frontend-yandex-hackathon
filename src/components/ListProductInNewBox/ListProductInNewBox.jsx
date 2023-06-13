import style from './ListProductInNewBox.module.css';
import ListItemProducts from '../ListItemProducts/ListItemProducts';
import { useState } from 'react';

export default function ListProductInNewBox() {
  const [isActive, setIsActive] = useState(false);

  const targetsStyle = () => {
    setIsActive((current) => !current);
  };
  const active = isActive ? 'rgba(254, 212, 43, 0.3)' : '';

  return (
    <ul className={style.ListProducts}>
      <ListItemProducts targetsStyle={targetsStyle} isActive={active} showText={'block'} />
      <ListItemProducts targetsStyle={targetsStyle} isActive={active} showText={'block'} />
      {/* <ListItemProducts targetsStyle={targetsStyle} isActive={active} showText={'block'} />
      <ListItemProducts targetsStyle={targetsStyle} isActive={active} showText={'block'} /> */}
    </ul>
  );
}
