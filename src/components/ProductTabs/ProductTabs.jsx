import s from '../../components/ProductTabs/ProductTabs.module.scss';

export const ProductTabs = () => {
  return (
    <div className={s.tabs}>
      <button className={s.tabsLink}>запчасти</button>
      <button className={s.tabsLink}>моторы</button>
      <button className={s.tabsLink}>шины</button>
      <button className={s.tabsLink}>электроника</button>
      <button className={s.tabsLink}>инструменты</button>
      <button className={s.tabsLink}>аксессуары</button>
    </div>
  );
};
