import s from './Product.module.scss';

import { prop } from 'dom7';
function Product(props) {
    return (
        <div className={s.product}>
            <div className={s.inner}>
                <h2 className={s.title}>{props.title}</h2>
                <a className={s.link} href="#!">Подробее</a>
            </div>
            <img className={s.pic} src={props.img} alt="pic" />
        </div>
    );
}
export default Product;