import s from './Header.module.scss';
import { Nav } from '../nav/Nav';
import { Logo } from '../logo/Logo';
import { Location } from '../location/Location';
import { Profile } from '../profile/Profile';

export const Header = () => {
  return (
    <div className={s.header}>
      <Nav />
      <Logo />
      <Location />
      <Profile />
    </div>
  );
};
