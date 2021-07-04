import s from './Main.module.scss';
import NavigationBotton from "../../components/navigation/Navigation";
export const Main = () => {
  return (
    <div className={s.container}>
      <main className={s.main}>
        <NavigationBotton />
      </main>
    </div>


  )

};
