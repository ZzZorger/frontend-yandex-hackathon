import style from './Header.module.css';
import yandex from '../../images/yandex.svg';
import yandexMarket from '../../images/yandexMarket.svg';
import sklad from '../../images/sklad.svg';
import burger from '../../images/burger.svg';
import funcMenu from '../../images/headerMenu.svg';
import { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import { useLocation } from 'react-router-dom';

export default function Header({ onPath, path }) {
  const location = useLocation();
  const [titleStyle, setTitleStyle] = useState('');
  useEffect(() => {
    setTitleStyle(location.pathname === '/operation' ? 'Приступить к работе' : 'Упаковка');
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
