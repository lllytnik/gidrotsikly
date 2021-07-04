import s from './Navigation.module.scss';
function Navigation() {
    return (
        <nav className={s.navBottom}>
            <ul className={s.list}>
                <li className={s.item}><a className={s.linkItem} href="">Квадроциклы</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Катера</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Гидроциклы</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Лодки</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Вездеходы</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Снегоходы</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Двигатели</a></li>
                <li className={s.item}><a className={s.linkItem} href="">Запчасти</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;