import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './navigation.scss';
import './pagination.scss';
import './scrollbar.scss';
import s from './Slider.module.scss';
import imgPic1 from '../../assets/images/slider-top/pic1.jpg';

// Import Swiper styles
import './swiper.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className={s.slideImg} src={imgPic1} alt="pic1" />
      </SwiperSlide>

      <SwiperSlide>
        <img className={s.slideImg} src={imgPic1} alt="pic1" />
      </SwiperSlide>

      <SwiperSlide>
        <img className={s.slideImg} src={imgPic1} alt="pic1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.slideImg} src={imgPic1} alt="pic1" />
      </SwiperSlide>

      <SwiperSlide>
        <img className={s.slideImg} src={imgPic1} alt="pic1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.slideImg} src={imgPic1} alt="pic1" />
      </SwiperSlide>
    </Swiper>
  );
};
