import s from './Main.module.scss';
import NavigationBotton from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
export const Main = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <Header />
        <NavigationBotton />
      </main>
    </div>


  )

};
