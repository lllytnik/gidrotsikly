import s from '../../components/Footer/Footer.module.scss';
import vkIcon from '../../assets/images/icons/vk-icon.svg';
import instaIcon from '../../assets/images/icons/instagram-icon.svg';
import youtubeIcon from '../../assets/images/icons/youtube-icon.svg';
import facebookIcon from '../../assets/images/icons/facebook-icon.svg';
import { NavLink } from 'react-router-dom';



export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
            <div className={s.footerTop}>
                <form className={s.footerForm} action="">
                    <h4 className={s.footerFormTitle}>
                    Подпишитесь на нашу расслку и узнайте о акциях быстрее
                    </h4>
                    <input className={s.footerInput} type="email" required placeholder="Введите Ваш e-mail"/>
                    <button className={s.footerBtn}>Отправить</button>
                </form>
                <div className={s.footerInfo}>
                    <h4 className={s.footerTitle}>
                        Информация
                    </h4>
                    <NavLink to={'/'} className={s.footerLink}>О компании</NavLink>
                    <NavLink to={'/'} className={s.footerLink}>Контакты</NavLink>
                    <NavLink to={'/'} className={s.footerLink}>Акции</NavLink>
                    <NavLink to={'/'} className={s.footerLink}>Магазины</NavLink>
                </div>
                <div className={s.footerShop}>
                    <h4 className={s.footerTitle}>
                    Интернет-магазин
                    </h4>
                    <NavLink to={'/'} className={s.footerLink}>Доставка и самовывоз</NavLink>
                    <NavLink to={'/'} className={s.footerLink}>Оплата</NavLink>
                    <NavLink to={'/'} className={s.footerLink}>Возврат-обмен</NavLink>
                    <NavLink to={'/'} className={s.footerLink}>Новости</NavLink>
                </div>
                <div className={s.footerSocial}>
                    <NavLink to={'/'} className={s.footerSocialLink}>
                        <img src={vkIcon} alt="img" />
                    </NavLink>
                    <NavLink to={'/'} className={s.footerSocialLink}>
                        <img src={instaIcon} alt="img" />
                    </NavLink>
                    <NavLink to={'/'} className={s.footerSocialLink}>
                        <img src={youtubeIcon} alt="img" />
                    </NavLink>
                    <NavLink to={'/'} className={s.footerSocialLink}>
                        <img src={facebookIcon} alt="img" />
                    </NavLink>
                </div>
            </div>
            <div className={s.footerBottom}>
                <NavLink to={'/'} className={s.footerBottomLink}>Договор оферты</NavLink>
                <NavLink to={'/'} className={s.footerBottomLink}>Политика обработки персональных данных</NavLink>
            </div>
            </div>
        </footer>
    );
}