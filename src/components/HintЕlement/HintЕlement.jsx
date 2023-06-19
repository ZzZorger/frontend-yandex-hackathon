import style from './HintЕlement.module.css';

export default function HintЕlement({ styles, text }) {
  return (
    <div style={styles} className={style.HintЕlement}>
      {text}
    </div>
  );
}
