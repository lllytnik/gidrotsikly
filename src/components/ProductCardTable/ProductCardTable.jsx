import { table } from '../../components/ProductCardTable/ProductCardTable.module.scss';
export const ProductCardTable = () => {
  return (
    <table>
      <tr>
        <th>Адрес</th>
        <th colspan="2">Режим работы</th>
        <th>Доступно</th>
        <th colspan="2">Количество</th>
      </tr>
      <tr>
        <td>Москва, ул. Науки 25</td>
        <td>
          пн-сб: <br></br> вс:
        </td>
        <td>
          08:00-19:00 <br></br> 09:00-17:00
        </td>
        <td>В наличии</td>
        <td>1</td>
        <td>
          <button>Купить</button>
        </td>
      </tr>
      <tr>
        <td>Москва, ул. Южная 134</td>
        <td>
          пн-сб: <br></br> вс:
        </td>
        <td>
          08:00-19:00 <br></br> 09:00-17:00
        </td>
        <td>В наличии</td>
        <td>2</td>
        <td>
          <button>Купить</button>
        </td>
      </tr>
      <tr>
        <td>Санкт-Петербург, ул. Красная 19</td>
        <td>
          пн-сб: <br></br> вс:
        </td>
        <td>
          08:00-19:00 <br></br> 09:00-17:00
        </td>
        <td>Нет в наличии</td>
        <td>0</td>
        <td>
          <button>Купить</button>
        </td>
      </tr>
      <tr>
        <td>Киев, ул Шевченко 167</td>
        <td>
          пн-сб: <br></br> вс:
        </td>
        <td>
          08:00-19:00 <br></br> 09:00-17:00
        </td>
        <td>Нет в наличии</td>
        <td>0</td>
        <td>
          <button>Купить</button>
        </td>
      </tr>
    </table>
  );
};
