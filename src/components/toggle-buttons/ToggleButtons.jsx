import s from './ToggleButtons.module.scss';

import iconCell from '../../assets/images/toggle-buttons/toggle-cell.svg';
import iconList from '../../assets/images/toggle-buttons/toggle-list.svg';

export const ToggleButtons = (props) => {
  return (
    <div className={s.toggleButtons}>
      <button className={s.btn}>
        <img src={iconCell} alt="cell" />
      </button>
      <button className={s.btn}>
        <img src={iconList} alt="list" />
      </button>
    </div>
  );
};
