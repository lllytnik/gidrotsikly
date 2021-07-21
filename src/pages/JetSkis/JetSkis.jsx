import s from './JetSkis.module.scss';

import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import { CustomSeparator } from '../../components/breadcrumbs/BreadCrumb';

export const JetSkis = () => {
  return (
    <div className={s.container}>
      <div className={s.JetSkis}>
        <Header />
        <Navigation />
        <CustomSeparator />
      </div>
    </div>
  );
};
