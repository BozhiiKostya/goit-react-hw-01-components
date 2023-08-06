import PropTypes from 'prop-types';
import { TableBodyTd, TableBodyTr } from './TableBodyItemStyle';
let counter = 0;

export const TableBodyItem = ({ items }) => {
  return items.map(({ id, type, amount, currency }) => {
    counter += 1;
    return (
      <TableBodyTr key={id} counter={counter}>
        <TableBodyTd>{type}</TableBodyTd>
        <TableBodyTd>{amount}</TableBodyTd>
        <TableBodyTd>{currency}</TableBodyTd>
      </TableBodyTr>
    );
  });
};

TableBodyItem.prototype = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
