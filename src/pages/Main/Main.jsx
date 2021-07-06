import s from './Main.module.scss';
import NavigationBotton from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
import SliderTop from '../../components/slider/Slider';
export const Main = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Header />
        <NavigationBotton />
        <SliderTop />
      </main>
    </div>


  )

};
