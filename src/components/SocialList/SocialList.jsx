import {socialBar, socialBarItems, socialBarItem} from '../../components/SocialList/SocialList.module.scss';
import { NavLink } from 'react-router-dom';

export const SocialList = ({image}) => {
    return (
        <div className={socialBar}>
            <ul className={socialBarItems}>
                {image.map(({src, alt, link}) => <li className={socialBarItem} ><NavLink to={link}><img src={src} alt={alt}/></NavLink></li>)}
            </ul>
        </div>
    );
};