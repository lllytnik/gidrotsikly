import s from '../../components/Footer/Footer.module.scss';
import  { FormSubscribe}  from '../../components/FormSubscribe/FormSubscribe';
import  { InfoLinksList}  from '../../components/InfoLinksList/InfoLinksList';
import { SocialList } from '../../components/SocialList/SocialList';
import { NavLink } from 'react-router-dom';
import insta from '../../assets/images/icons/instagram-icon.svg'
import vk from '../../assets/images/icons/vk-icon.svg'
import facebook from '../../assets/images/icons/facebook-icon.svg'
import youtube from '../../assets/images/icons/youtube-icon.svg'


export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footerContainer}>
            <div className={s.footerTop}>
                <FormSubscribe />
                <InfoLinksList title={'Информация'} linkName={[{name: 'О компании', link: '/'}, {name: 'Контакты', link: '/'}, {name: 'Акции', link: '/'}, {name: 'Магазины', link: '/'}]}/>
                <InfoLinksList title={'Интернет-магазин'} linkName= {[{name:'Доставка и самовывоз', link:'/'}, {name:'Оплата', link:'/'}, {name:'Возврат-обмен', link:'/'}, {name:'Новости',link:'/'}]} />
                <SocialList image={[
                    {src: insta, alt:'instagram', link:'/'}, 
                    {src: vk, alt:'vk', link:'/'}, 
                    {src: facebook, alt:'facebook', link:'/'},
                    {src: youtube, alt:'youtube', link:'/'}
                    ]} />
            </div>
            <div className={s.footerBottom}>
                <NavLink to={'/'} className={s.footerBottomLink}>Договор оферты</NavLink>
                <NavLink to={'/'} className={s.footerBottomLink}>Политика обработки персональных данных</NavLink>
            </div>
            </div>
        </footer>
    );
}