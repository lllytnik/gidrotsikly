import { table } from '../../components/ProductCardTable/ProductCardTable.module.scss';
export const ProductCardTable = ({ props }) => {
  return (
    <table>
      <tr>
        <th>Адрес</th>
        <th colspan="2">Режим работы</th>
        <th>Доступно</th>
        <th colspan="2">Количество</th>
      </tr>
      {props.map(({ name, openingTime, isAvailable, quantity, goodId }) => (
        <tr>
          <td>{name}</td>
          <td>
            {openingTime.fulltime.days}
            <br></br>
            {openingTime.partTime.days}
          </td>
          <td>
            {openingTime.fulltime.time}
            <br></br>
            {openingTime.partTime.time}
          </td>
          <td>{isAvailable}</td>
          <td>{quantity}</td>
          <td>
            <button id={goodId}>Купить</button>
          </td>
        </tr>
      ))}
    </table>
  );
};
