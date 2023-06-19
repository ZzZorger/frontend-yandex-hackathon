import style from './TextItem.module.css';

export default function TextItem({ styles, children }) {
  return (
    <span style={styles} className={style.TextItem}>
      {children}
    </span>
  );
}
