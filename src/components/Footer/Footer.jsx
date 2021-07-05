import s from '../../components/Footer/Footer.module.scss';
import vkIcon from '../../assets/images/icons/vk-icon.svg';
import instaIcon from '../../assets/images/icons/instagram-icon.svg';
import youtubeIcon from '../../assets/images/icons/youtube-icon.svg';
import facebookIcon from '../../assets/images/icons/facebook-icon.svg';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
            <div className={s.footerTop}>
                <form className={s.footerForm} action="">
                    <h4 className={s.footerFormTitle}>
                    Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
                    </h4>
                    <input className={s.footerInput} type="email" required placeholder="Введите Ваш e-mail"/>
                    <button className={s.footerBtn}>Отправить</button>
                </form>
                <div className={s.footerInfo}>
                    <h4 className={s.footerTitle}>
                        Информация
                    </h4>
                    <a className={s.footerLink} href="#">О компании</a>
                    <a className={s.footerLink} href="#">Контакты</a>
                    <a className={s.footerLink} href="#">Акции</a>
                    <a className={s.footerLink} href="#">Магазины</a>
                </div>
                <div className={s.footerShop}>
                    <h4 className={s.footerTitle}>
                    Интернет-магазин
                    </h4>
                    <a className={s.footerLink} href="#">Доставка и самовывоз</a>
                    <a className={s.footerLink} href="#">Оплата</a>
                    <a className={s.footerLink} href="#">Возврат-обмен</a>
                    <a className={s.footerLink} href="#">Новости</a>
                </div>
                <div className={s.footerSocial}>
                    <a className={s.footerSocialLink} href="#">
                        <img src={vkIcon} alt="img" />
                    </a>
                    <a className={s.footerSocialLink} href="#">
                        <img src={instaIcon} alt="img" />
                    </a>
                    <a className={s.footerSocialLink} href="#">
                        <img src={youtubeIcon} alt="img" />
                    </a>
                    <a className={s.footerSocialLink} href="#">
                        <img src={facebookIcon} alt="img" />
                    </a>
                </div>
            </div>
            <div className={s.footerBottom}>
                <a className={s.footerBottomLink} href="#">Договор оферты</a>
                <a className={s.footerBottomLink} href="#">Политика обработки персональных данных</a>
            </div>
            </div>
        </footer>
    );
}