import React from 'react';
import { calculateRewardPoints } from '../utils/calculateRewardPoints';

const AggregatedTable = ({ transactionsByMonth }) => {
  const totalPointsByCustomer = {};

  Object.values(transactionsByMonth).forEach((transactions) => {
    transactions.forEach((transaction) => {
      const points = calculateRewardPoints(transaction.amount);
      if (!totalPointsByCustomer[transaction.customerId]) {
        totalPointsByCustomer[transaction.customerId] = 0;
      }
      totalPointsByCustomer[transaction.customerId] += parseFloat(points);
    });
  });

  return (
    <div>
      <h2>Total Points Per Customer</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(totalPointsByCustomer).map(([customerId, totalPoints]) => (
            <tr key={customerId}>
              <td>Customer {customerId}</td>
              <td>{totalPoints.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AggregatedTable;
