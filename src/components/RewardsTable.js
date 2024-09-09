import React from 'react';
import { calculateRewardPoints } from '../utils/calculateRewardPoints';
const RewardsTable = ({ transactionsByMonth }) => (
  <div>
    <h2>Monthly Rewards</h2>
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Customer</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(transactionsByMonth).map(([month, transactions]) => (
          transactions.map((transaction) => (
            <tr key={transaction.transactionId}>
              <td>{month}</td>
              <td>{transaction.name}</td>
              <td>{calculateRewardPoints(transaction.amount)}</td>
            </tr>
          ))
        ))}
      </tbody>
    </table>
  </div>
);

export default RewardsTable;
