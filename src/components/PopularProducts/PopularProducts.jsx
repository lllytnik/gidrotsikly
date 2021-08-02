import {
  popularProducts,
  popularProductsTitle,
  popularProductsContainer,
  popularProductsCardWrap,
} from '../../components/PopularProducts/PopularProducts.module.scss';
import { PopularProductCard } from '../PopularProductCard/PopularProductCard';
import { ProductTabs } from '../../components/ProductTabs/ProductTabs';
import { Title } from '../Title/Title';

export const PopularProducts = ({ productCard }) => {
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
          {productCard.map(
            ({
              name,
              photo,
              price,
              salePrice,
              isAvailable,
              isOnSale,
              producer,
              productNum,
              rating,
            }) => (
              <PopularProductCard
                name={name}
                photo={photo}
                price={price}
                salePrice={salePrice}
                isAvailable={isAvailable}
                isOnSale={isOnSale}
                producer={producer}
                productNum={productNum}
                rating={rating}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
