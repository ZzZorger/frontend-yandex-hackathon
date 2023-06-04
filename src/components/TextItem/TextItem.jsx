import style from './TextItem.module.css';

// может вставляться в кнопку, а может идти просто текстом

export default function TextItem({ styles, children }) {
  return (
    <span style={styles} className={style.TextItem}>
      {children}
    </span>
  );
}
