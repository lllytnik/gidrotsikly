import s from './Logo.module.scss';

import logo from '../../assets/images/header/logo.svg';

export const Logo = (props) => {
  return (
    <a className={s.likeLogo} href="#!">
      <img className={s.logo} src={logo} alt="logo" />
    </a>
  );
};
