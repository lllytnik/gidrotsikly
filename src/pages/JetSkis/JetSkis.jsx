import s from './JetSkis.module.scss';

import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import { CustomSeparator } from '../../components/breadcrumbs/BreadCrumb';
import { SortingProduct } from '../../components/product-top-block/SortingProduct';
import TabPanel from '../../components/paper/paper';

export const JetSkis = () => {
  return (
    <div className={s.container}>
      <div className={s.JetSkis}>
        <Header />
        <Navigation />
        <div className={s.customSeparator}>
          <CustomSeparator />
        </div>
        <SortingProduct />
      </div>
      <div className={s.parameters}>
        <TabPanel />
      </div>
    </div>
  );
};
