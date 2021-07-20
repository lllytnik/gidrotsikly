import s from './Profile.module.scss';

import likeIcon from '../../assets/images/header/like.svg';
import manIcon from '../../assets/images/header/icon-men.svg';
import basketIcon from '../../assets/images/header/icon-basket.svg';

export const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ul className={s.profileList}>
        <li className={s.profileItem}>
          <a className={s.profileLink} href="#!">
            <img className={s.profileImg} src={likeIcon} alt="likeIcon" />
          </a>
        </li>
        <li className={s.profileItem}>
          <a className={s.profileLink} href="#!">
            <img className={s.profileImg} src={manIcon} alt="manIcon" />
          </a>
        </li>
        <li className={s.profileItem}>
          <a className={s.profileLink} href="#!">
            <img className={s.profileImg} src={basketIcon} alt="basketIcon" />
          </a>
        </li>
      </ul>
      <span className={s.profileQuantity}>1</span>
    </div>
  );
};
