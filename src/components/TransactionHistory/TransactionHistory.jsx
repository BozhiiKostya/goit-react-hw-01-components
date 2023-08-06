import { TableHeader } from 'components/TableHeader/TableHeader';
import { TableBody } from 'components/TableBody/TableBody';
import { TableContainer } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer className="transaction-history">
      <TableHeader />
      <TableBody items={items} />
    </TableContainer>
  );
};
