import s from './NavLink.module.scss';

export const NavLink = (props) => {
    return (
        <a className={s.navLink} href="#!">{props.navLink}</a>
    );
}