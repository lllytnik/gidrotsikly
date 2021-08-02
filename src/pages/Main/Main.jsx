import { body, wrapper } from '../Main/Main.module.scss';
import { SearchShop } from '../../components/SearchShop/SearchShop';
import { PopularProducts } from '../../components/PopularProducts/PopularProducts';
import { DiscountsBaner } from '../../components/DiscountsBaner/DiscountsBaner';
import { Footer } from '../../components/Footer/Footer';
import { ShowMoreBtn } from '../../components/ShowMoreBtn/ShowMoreBtn';
import { productCard } from '../../data/product-data';
import { goodsElectronicData } from '../../data/goods-data';

export const Main = () => {
  return (
    <div className={wrapper}>
      <PopularProducts productCard={productCard} />
      <ShowMoreBtn />
      <DiscountsBaner />
      <PopularProducts productCard={goodsElectronicData} />
      <Footer />
    </div>
  );
};
