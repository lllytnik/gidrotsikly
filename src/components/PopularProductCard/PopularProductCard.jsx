import s from '../../components/PopularProductCard/PopularProductCard.module.scss';
import { NavLink } from 'react-router-dom';
import backpack from '../../assets/images/goods/equipment/backpack.png';
import basket from '../../assets/images/icons/basket-icon.svg'

export const PopularProductCard = (props) => {
    return (
    <div className={s.product}>
        <img className={s.productImg} src={backpack} alt="product" />
        <p className={s.productName}>{props.name}</p>
        <div className={s.productIs}>
            <span className={s.productPrice}>{props.price}</span>
            <button className={s.productIsBtn}>
            <img src={basket} alt="basket" />
            </button>
        </div>
        <div className={s.productNo}>
            <span className={s.productNoText}>нет в наличии</span>
            <button className={s.productNoBtn}>Сообщить о поступлении</button>
        </div>
        <button className={s.productBtn}>Посмотреть товар</button>
    </div>
    );
};