import { footerBottom, footerBottomLink } from '../../components/PersonalPolicy/PersonalPolicy.module.scss';
import { NavLink } from 'react-router-dom'
export const PersonalPolicy = () => {
  return (
    <div className={footerBottom}>
      <NavLink to={'/'} className={footerBottomLink}>Договор оферты</NavLink>
      <NavLink to={'/'} className={footerBottomLink}>Политика обработки персональных данных</NavLink>
    </div>
  );
}