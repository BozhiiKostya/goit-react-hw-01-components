import { TableBodyStyle, TableBodyTd, TableBodyTr } from './TableBodyStyle';
import PropTypes from 'prop-types';

let counter = 0;

export const TableBody = ({ items }) => {
  return (
    <TableBodyStyle>
      {items.map(({ id, type, amount, currency }) => {
        counter += 1;
        return (
          <TableBodyTr key={id} counter={counter}>
            <TableBodyTd>{type}</TableBodyTd>
            <TableBodyTd>{amount}</TableBodyTd>
            <TableBodyTd>{currency}</TableBodyTd>
          </TableBodyTr>
        );
      })}
    </TableBodyStyle>
  );
};

TableBody.prototype = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
