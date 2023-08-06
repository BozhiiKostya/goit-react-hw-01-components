import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Layout } from './layout';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
