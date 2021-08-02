import {
  label,
  input,
} from '../../components/SearchShop/SearchShop.module.scss';

export const SearchShop = () => {
  return (
    <form>
      <label className={label}>
        Магазин
        <input className={input} />
      </label>
    </form>
  );
};
