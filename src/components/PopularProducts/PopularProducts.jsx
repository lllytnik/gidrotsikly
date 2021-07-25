import {
  popularProducts,
  popularProductsTitle,
  popularProductsContainer,
  popularProductsCardWrap,
} from '../../components/PopularProducts/PopularProducts.module.scss';
import { PopularProductCard } from '../PopularProductCard/PopularProductCard';
import { ProductTabs } from '../../components/ProductTabs/ProductTabs';
import { Title } from '../Title/Title';

export const PopularProducts = () => {
  return (
    <section className={popularProducts}>
      <div className={popularProductsContainer}>
        <Title title="Популярные товары" />
        <ProductTabs
          items={[
            { name: 'запчасти' },
            { name: 'моторы' },
            { name: 'шины' },
            { name: 'электроника' },
            { name: 'инструменты' },
            { name: 'аксессуары' },
          ]}
        />
        <div className={popularProductsCardWrap}>
          <PopularProductCard name="Водонепроницаемый рюкзак" price="9800" />
          <PopularProductCard />
          <PopularProductCard />
          <PopularProductCard />
        </div>
      </div>
    </section>
  );
};
