import s from './Select.module.scss';

export const Select = (props) => {
  return (
    <form action="#">
      <select className={s.select}>
        <option>По полулярности</option>
        <option>По рейтингу</option>
        <option>По цене</option>
      </select>
    </form>
  );
};
