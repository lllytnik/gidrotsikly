import {
  product,
  productBtnHover,
  productImgWrap,
  productImg,
  productAvailable,
  productName,
  productPrice,
  basketBtn,
  productSale,
  productNotAvailable,
  productNotAvailableText,
  productBtnReport,
} from '../../components/PopularProductCard/PopularProductCard.module.scss';
import basket from '../../assets/images/icons/basket-icon.svg';

export const PopularProductCard = ({
  name,
  photo,
  price,
  salePrice,
  isAvailable,
  isOnSale,
  producer,
  productNum,
  rating,
}) => {
  return (
    <div className={product}>
      <button className={productBtnHover}>Посмотреть товар</button>
      {isOnSale && <span className={productSale}>sale</span>}
      <div className={productImgWrap}>
        <img className={productImg} src={photo} alt={name} />
      </div>
      <div className={isAvailable ? productAvailable : productNotAvailable}>
        <h4 className={productName}>{name}</h4>
      </div>
      {isAvailable ? (
        <>
          <span className={productPrice}>{price}</span>
          <button className={basketBtn}>
            <img src={basket} />
          </button>
        </>
      ) : (
        <>
          <span className={productNotAvailableText}>нет в наличии</span>
          <button className={productBtnReport}>Сообщить о поступлении</button>
        </>
      )}
    </div>
  );
};
