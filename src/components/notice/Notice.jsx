import s from './Notice.module.scss';
import pic from '../../assets/images/notice/pic-motor.png';
export const Notice = () => {
  return (
    <div className={s.notice}>
      <div className={s.wrapper}>
        <div className={s.boxLeft}>
          <h2 className={s.title}>Акция</h2>
        </div>
        <div className={s.boxRight}>
          <span className={s.priceNew}>190 000</span>
          <span className={s.priceOld}>225 000</span>
        </div>
      </div>
      <img src={pic} alt="pic" />
      <h3 className={s.subtitle}>Лодочный мотор Suzuki DF9.9BRS</h3>
      <div className={s.boxBotton}>
        <span className={s.text}>Акция действует до</span>
        <span className={s.data}>31.08.2020</span>
      </div>
    </div>
  );
};
