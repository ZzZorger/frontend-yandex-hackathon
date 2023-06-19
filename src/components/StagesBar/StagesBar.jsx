import style from './StagesBar.module.css';

export default function StagesBar({ stage }) {
  if (stage === 1) {
    return (
      <div className={style.Stages}>
        <div
          style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)', margin: '0 10px 0 0' }}
          className={style.StageLine}
        />
        <div style={{ margin: '0 10px 0 0' }} className={style.StageLine} />
        <div className={style.StageLine} />
      </div>
    );
  } else if (stage === 2) {
    return (
      <div className={style.Stages}>
        <div
          style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)', margin: '0 10px 0 0' }}
          className={style.StageLine}
        />
        <div
          style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)', margin: '0 10px 0 0' }}
          className={style.StageLine}
        />
        <div className={style.StageLine} />
      </div>
    );
  } else if (stage === 3) {
    return (
      <div className={style.Stages}>
        <div
          style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)', margin: '0 10px 0 0' }}
          className={style.StageLine}
        />
        <div
          style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)', margin: '0 10px 0 0' }}
          className={style.StageLine}
        />
        <div style={{ background: 'linear-gradient(180deg, #ffe55b -23.8%, #ffcc00 109.49%)' }} className={style.StageLine} />
      </div>
    );
  }
}
