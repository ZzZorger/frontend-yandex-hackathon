import style from './Profile.module.css';
import turbo from '../../images/turbo.svg';

export default function Profile() {
  return (
    <div className={style.Content}>
      <div className={style.Name}>sof-natgemokee</div>
      <div className={style.Efficiency}>
        <img className={style.Img} alt="ракета" src={turbo}></img>
        <p className={style.EfficiencyValue}>79%</p>
      </div>
    </div>
  );
}
