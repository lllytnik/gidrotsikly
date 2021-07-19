import {popularProducts, popularProductsTitle, popularProductsContainer, popularProductsCardWrap} from '../../components/PopularProducts/PopularProducts.module.scss'
import { PopularProductCard } from '../PopularProductCard/PopularProductCard';
import { ProductTabs } from '../../components/ProductTabs/ProductTabs';

export const PopularProducts= () => {
    return (
        <section className={popularProducts}>
            <div className={popularProductsContainer}>
                <h2 className={popularProductsTitle}>Популярные товары</h2>
                < ProductTabs />
                <div className={popularProductsCardWrap}>
                < PopularProductCard name="Водонепроницаемый рюкзак" price="9800"/>
                < PopularProductCard />
                < PopularProductCard />
                < PopularProductCard />
                </div>
            </div>
        </section>
    );
};