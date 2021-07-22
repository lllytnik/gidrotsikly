import s from './Product.module.scss';
import { NavLink } from 'react-router-dom';

export const Product = (props) => {
  return (
    <div className={s.product}>
      <div className={s.inner}>
        <h2 className={s.title}>{props.title}</h2>
        <NavLink className={s.link} to={'/'}>
          Подробее
        </NavLink>
      </div>
      <img className={s.pic} src={props.img} alt="pic" />
    </div>
  );
};
