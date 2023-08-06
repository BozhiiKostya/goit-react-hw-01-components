import {
  TableHeaderItemStyle,
  TableHeaderStyle,
  TableHeaderTrStyle,
} from './TableHeader.styled';

export const TableHeader = () => {
  return (
    <TableHeaderStyle>
      <TableHeaderTrStyle>
        <TableHeaderItemStyle>Type</TableHeaderItemStyle>
        <TableHeaderItemStyle>Amount</TableHeaderItemStyle>
        <TableHeaderItemStyle>Currency</TableHeaderItemStyle>
      </TableHeaderTrStyle>
    </TableHeaderStyle>
  );
};
