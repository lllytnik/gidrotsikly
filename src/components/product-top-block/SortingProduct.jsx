import s from './SortingProduct.module.scss';
import { ProductTitle } from '../productTitle/ProductTitle';
import { TabsProduct } from '../tabs-product/TabsProduct';
import { Select } from '../select/Select';

export const SortingProduct = (props) => {
  return (
    <div className={s.sortingProduct}>
      <ProductTitle title={'Гидроциклы'} />
      <div className={s.inner}>
        <div className={s.tabsProduct}>
          <TabsProduct title={'Полноприводные'} />
          <TabsProduct title={'от 5000'} />
          <TabsProduct title={'BRP'} />
          <TabsProduct title={'еще'} />
        </div>
        <Select />
      </div>
    </div>
  );
};
