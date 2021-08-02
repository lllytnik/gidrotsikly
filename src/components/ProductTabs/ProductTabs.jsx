import {
  tabs,
  tabsLink,
} from '../../components/ProductTabs/ProductTabs.module.scss';

export const ProductTabs = ({ items }) => {
  return (
    <div className={tabs}>
      {items.map(({ name }) => (
        <button className={tabsLink}>{name}</button>
      ))}
    </div>
  );
};
