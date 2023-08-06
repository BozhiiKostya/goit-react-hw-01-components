import { TableBodyItem } from 'components/TableBodyItem/TableBodyItem';
import { TableBodyStyle } from './TableBodyStyle';

export const TableBody = ({ items }) => {
  return (
    <TableBodyStyle>
      <TableBodyItem items={items} />
    </TableBodyStyle>
  );
};
