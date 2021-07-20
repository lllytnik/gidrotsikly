import {
  product,
  productBtn,
  productImg,
  productName,
  productPrice,
  productIs,
  productIsBtn,
  productNo,
  productNoText,
  productNoBtn,
} from '../../components/PopularProductCard/PopularProductCard.module.scss';
import backpack from '../../assets/images/goods/equipment/backpack.png';
import basket from '../../assets/images/icons/basket-icon.svg';

export const PopularProductCard = ({ name, price }) => {
  return (
    <div className={product}>
      <img src={backpack} alt="image" />
      <p className={productName}>{name}</p>
      <div className={productIs}>
        <span className={productPrice}>{price}</span>
        <button className={productIsBtn}>
          <img src={basket} alt="basket" />
        </button>
      </div>
      <div className={productNo}>
        <span className={productNoText}>нет в наличии</span>
        <button className={productNoBtn}>Сообщить о поступлении</button>
      </div>
      <button className={productBtn}>Посмотреть товар</button>
    </div>
  );
};
