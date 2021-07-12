import {infoLinksList, infoLinksListTitle, infoLinksListItems, infoLinksListItem, infoLinksListLink} from '../../components/InfoLinksList/InfoLinksList.module.scss';
import { NavLink } from 'react-router-dom';

export const InfoLinksList = ({title, linkName}) => {
    return (
        <div className={infoLinksList}>
            <h4 className={infoLinksListTitle}>
                {title}
            </h4>
            <ul className={infoLinksListItems}>
                {linkName.map(({name,link}) => <li className={infoLinksListItem}><NavLink className={infoLinksListLink} to={link}>{name}</NavLink></li>)}
            </ul>
        </div>
    );
};