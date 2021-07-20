import {
  discounts,
  discountsContainer,
  discountsTitle,
  discountsBtn,
  discountsWrapper,
  discountsImg,
} from '../../components/DiscountsBaner/DiscountsBaner.module.scss';
import offRoader from '../../assets/images/technology/off_roader.png';
import quadrocycle from '../../assets/images/technology/quadrocycle.png';

export const DiscountsBaner = () => {
  return (
    <section className={discounts}>
      <div className={discountsContainer}>
        <div className={discountsWrapper}>
          <img className={discountsImg} src={quadrocycle} />
          <img className={discountsImg} src={offRoader} />
          <h2 className={discountsTitle}>Скидки на все запчасти до 70%</h2>
          <button className={discountsBtn}>Посмотреть все</button>
        </div>
      </div>
    </section>
  );
};
