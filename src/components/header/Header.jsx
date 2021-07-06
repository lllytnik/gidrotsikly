import s from './Header.module.scss';
import logo from '../../assets/images/header/logo.svg'
import likeIcon from '../../assets/images/header/like.svg'
import manIcon from '../../assets/images/header/icon-men.svg'
import basketIcon from '../../assets/images/header/icon-basket.svg'
function Header() {
    return (
        <div className={s.header}>
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li className={s.navItem}><a className={s.navLink} href="#!">Магазины</a></li>
                    <li className={s.navItem}><a className={s.navLink} href="#!">Акции</a></li>
                    <li className={s.navItem}><a className={s.navLink} href="#!">Доставка и оплата</a></li>
                </ul>
            </nav>
            <a className={s.likeLogo} href="#!"><img className={s.logo} src={logo} alt="logo" /></a>
            <div className={s.location}>
                <a className={s.locationLink} href="#!">Москва,  ул. Науки  25</a>

            </div>
            <div className={s.profile}>
                <ul className={s.profileList}>
                    <li className={s.profileItem}><a className={s.profileLink} href="#!"><img className={s.profileImg} src={likeIcon} alt="likeIcon" /></a></li>
                    <li className={s.profileItem}><a className={s.profileLink} href="#!"><img className={s.profileImg} src={manIcon} alt="manIcon" /></a></li>
                    <li className={s.profileItem}><a className={s.profileLink} href="#!"><img className={s.profileImg} src={basketIcon} alt="basketIcon" /></a></li>
                </ul>
                <span className={s.profileQuantity}>1</span>
            </div>
        </div>
    );
}

export default Header;