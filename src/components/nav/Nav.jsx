import s from './Nav.module.scss';
import { NavLink } from '../nav-link/NavLink';

export const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink navLink={'Магазины'} />
        </li>
        <li className={s.navItem}>
          <NavLink navLink={'Акции'} />
        </li>
        <li className={s.navItem}>
          <NavLink navLink={'Доставка и оплата'} />
        </li>
      </ul>
    </nav>
  );
};
