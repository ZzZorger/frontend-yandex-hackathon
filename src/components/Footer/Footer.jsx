import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.Content}>
      <p className={style.Adress}>Коммерческая тайна ООО «Яндекс», 119021, Россия, г. Москва, ул. Льва Толстого, д. 16</p>
      <p className={style.Version}>2022.11.1 / 2023.1.68</p>
      <p className={style.Copyright}>© 2003–2023 ООО «Яндекс»</p>
    </footer>
  );
}
