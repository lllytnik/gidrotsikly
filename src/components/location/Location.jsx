import s from './Location.module.scss';

export const Location = (props) => {
  return (
    <div className={s.location}>
      <a className={s.locationLink} href="#!">
        Москва, ул. Науки 25
      </a>
    </div>
  );
};
