import s from './SectionProduct.module.scss';
import Product from '../product/Product';

import productImg from '../../assets/images/product/pic1.png';
import productImg2 from '../../assets/images/product/pic2.png';
import productImg3 from '../../assets/images/product/pic3.png';
import productImg4 from '../../assets/images/product/pic4.png';
import productImg5 from '../../assets/images/product/pic5.png';
import productImg6 from '../../assets/images/product/pic6.png';

export const SectionProduct = () => {
  const data = {
    title: 'Квадрациклы',
    img: productImg,
  };
  const data2 = {
    title: 'Гидроциклы',
    img: productImg2,
  };
  const data3 = {
    title: 'Катера',
    img: productImg3,
  };
  const data4 = {
    title: 'Снегоходы',
    img: productImg4,
  };
  const data5 = {
    title: 'Вездеходы',
    img: productImg5,
  };
  const data6 = {
    title: 'Двигатели',
    img: productImg6,
  };
  return (
    <div className={s.sectionProduct}>
      <Product title={data.title} img={data.img} />
      <Product title={data2.title} img={data2.img} />
      <Product title={data3.title} img={data3.img} />
      <Product title={data4.title} img={data4.img} />
      <Product title={data5.title} img={data5.img} />
      <Product title={data6.title} img={data6.img} />
    </div>
  );
};
