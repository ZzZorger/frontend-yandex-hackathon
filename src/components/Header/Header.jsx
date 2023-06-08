import style from './Header.module.css';
import yandex from '../../images/yandex.svg';
import yandexMarket from '../../images/yandexMarket.svg';
import sklad from '../../images/sklad.svg';
import burger from '../../images/burger.svg';
import funcMenu from '../../images/headerMenu.svg';
import { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';

export default function Header({ onPath, path }) {
  const [titleStyle, setTitleStyle] = useState('');
  useEffect(() => {
    if (onPath === path[0]) {
      setTitleStyle('Приступить к работе');
    } else {
      setTitleStyle('Упаковка');
    }
  });
  return (
    <header className={style.Content}>
      <nav className={style.Nav}>
        <img className={style.Burger} alt="бургер меню" src={burger} />
        <div className={style.Logos}>
          <img className={style.LogoY} alt="логотип яндекс" src={yandex} />
          <img className={style.LogoYM} alt="логотип яндекс маркет" src={yandexMarket} />
          <img className={style.Sign} alt="надпись 'Скдад'" src={sklad} />
        </div>
      </nav>
      <h1 className={style.Title}>{titleStyle}</h1>
      <div className={style.ProfileSection}>
        <Profile />
        <img className={style.FuncMenu} alt="кнопка меню" src={funcMenu} />
      </div>
    </header>
  );
}
