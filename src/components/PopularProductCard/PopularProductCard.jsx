import s from '../../components/PopularProductCard/PopularProductCard.module.scss';
import { NavLink } from 'react-router-dom';
import backpack from '../../assets/images/goods/equipment/backpack.png';
import basket from '../../assets/images/icons/basket-icon.svg'

export const PopularProductCard = (props) => {
    return (
    <div className={s.product}>
        <img className={s.productImg} src={props.img} alt="product" />
        <p className={s.productName}>{props.name}</p>
        <span className={s.productPrice}>{props.price}</span>
        <button className={s.productBtn}>
            <img src={basket} alt="basket" />
        </button>
    </div>
    );
};