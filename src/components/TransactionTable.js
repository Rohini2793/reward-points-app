import React from 'react';

const TransactionTable = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Transaction ID</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction) => (
        <tr key={transaction.transactionId}>
          <td>{transaction.name}</td>
          <td>{transaction.transactionId}</td>
          <td>{transaction.date}</td>
          <td>${transaction.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionTable;
