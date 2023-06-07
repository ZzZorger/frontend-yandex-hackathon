import yandex from '../../images/yandex.svg';
import yandexMarket from '../../images/yandexMarket.svg';
import turbo from '../../images/turbo.svg';
import { useEffect, useState } from 'react';

export default function Header({ onPath, path }) {
  const [titleStyle, setTitleStyle] = useState('');
  useEffect(() => {
    // switch (onPath) {
    //   case path[0]:
    //     setTitleStyle('Приступить к работе');
    //     break;
    //   case path[0]:
    //     setTitleStyle('Упаковка');
    //     break;
    // }
    if (onPath === path[0]) {
      setTitleStyle('Приступить к работе');
    } else {
      setTitleStyle('Упаковка');
    }
  });
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__burger-menu transition">
          <span></span>
        </div>
        <div className="header__logo">
          <img className="header__logo-img" alt="логотип яндекс" src={yandex} />
          <img className="header__logo-img" alt="логотип яндекс маркет" src={yandexMarket} />
          <h2 className="header__logo-title">Склад</h2>
        </div>
      </nav>
      <h1 className="header__title">{titleStyle}</h1>
      <div className="header__profile-section">
        <div className="profile">
          <div className="profile__name">sof-natgemokee</div>
          <div className="profile__efficiency transition">
            <img className="profile__img" alt="ракета" src={turbo}></img>
            <p className="profile__efficiency-value">79%</p>
          </div>
        </div>
        <div className="header__func-menu transition">
          <span></span>
        </div>
      </div>
    </header>
  );
}
