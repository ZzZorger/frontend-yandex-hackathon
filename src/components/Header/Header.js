import yandex from '../../images/yandex.svg';
import yandexMarket from '../../images/yandexMarket.svg';
import turbo from '../../images/turbo.svg';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__burger-menu">
          <span></span>
        </div>
        <div className="header__logo">
          <img className="header__logo-img" alt="логотип яндекс" src={yandex} />
          <img className="header__logo-img" alt="логотип яндекс маркет" src={yandexMarket} />
          <h2 className="header__logo-title">Склад</h2>
        </div>
      </nav>
      <h1 className="header__title">Упаковка</h1>
      <div className="profile">
        <div className="profile__name">sof-natgemokee</div>
        <div className="profile__efficiency">
          <img className="profile__img" alt="ракета" src={turbo}></img>
          <p className="profile__efficiency-value">79%</p>
        </div>
      </div>
      <div className="header__func-menu">
        <span></span>
      </div>
    </header>
  );
}
