import s from './TabsProduct.module.scss';

export const TabsProduct = (props) => {
  return (
    <div className={s.tabsItem}>
      <a className={s.tabsLink} href="#!">
        {props.title}
      </a>
    </div>
  );
};
