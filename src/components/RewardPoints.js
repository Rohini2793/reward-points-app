import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../utils/api';
import { calculateRewardPoints } from '../utils/calculateRewardPoints';
import { groupTransactionsByMonth } from '../utils/groupTransactionsByMonth';
import TransactionTable from './TransactionTable';
import RewardsTable from './RewardsTable';
import AggregatedTable from './AggregatedTable';

const RewardPoints = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError('Error fetching transactions');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!transactions.length) return <div>No transactions available</div>;

  const transactionsByMonth = groupTransactionsByMonth(transactions);

  return (
    <div>
      <h1>Reward Points Summary</h1>
      <TransactionTable transactions={transactions} />
      <RewardsTable transactionsByMonth={transactionsByMonth} />
      <AggregatedTable transactionsByMonth={transactionsByMonth} />
    </div>
  );
};

export default RewardPoints;
