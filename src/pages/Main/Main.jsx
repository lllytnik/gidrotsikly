import s from './Main.module.scss';

import { Navigation } from '../../components/navigation/Navigation';
import { Header } from '../../components/header/Header';
import { Slider } from '../../components/slider/Slider';
import { Notice } from '../../components/notice/Notice';
import { SearchBlock } from '../../components/search-block/SearchBlock';
import { SectionProduct } from '../../components/section-product/SectionProduct';

export const Main = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Header />
        <Navigation />
        <div className={s.inner}>
          <Slider />
          <Notice />
        </div>
        <SearchBlock />
        <SectionProduct />
      </main>
    </div>
  );
};
