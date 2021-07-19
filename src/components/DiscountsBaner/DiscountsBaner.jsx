import { discounts, discountsContainer, discountsTitle, discountsBtn } from "../../components/DiscountsBaner/DiscountsBaner.module.scss";

export const DiscountsBaner = () => {
  return (
    <section className={discounts}>
      <div className={discountsContainer}>
      <h2 className={discountsTitle}>Скидки на все запчасти до 70%</h2>
      <button className={discountsBtn}>Посмотреть все</button>
      </div>
    </section>
  );
}