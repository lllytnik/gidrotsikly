import { container } from '../JetSki/JetSki.module.scss';
import { SearchShop } from '../../components/SearchShop/SearchShop';
import { ProductTabs } from '../../components/ProductTabs/ProductTabs';
import { ProductCardTable } from '../../components/ProductCardTable/ProductCardTable';
import { Footer } from '../../components/Footer/Footer';
import { PopularProducts } from '../../components/PopularProducts/PopularProducts';
import { goodsElectronicData } from '../../data/goods-data';
import { storeForGoodData } from '../../data/stores-data';

export const JetSki = () => {
  return (
    <>
      <div className={container}>
        <ProductTabs
          items={[
            { name: 'О товаре' },
            { name: 'Характеристики' },
            { name: 'Отзывы' },
            { name: 'Самовывоз' },
            { name: 'Доставка' },
            { name: 'Сервис' },
            { name: 'Гарантия' },
          ]}
        />
        <div>
          <SearchShop />
        </div>
        <ProductCardTable props={storeForGoodData} />
        <PopularProducts productCard={goodsElectronicData} />
      </div>
      <Footer />
    </>
  );
};
