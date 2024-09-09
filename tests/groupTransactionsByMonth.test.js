import { groupTransactionsByMonth } from '../src/utils/groupTransactionsByMonth';

describe('groupTransactionsByMonth', () => {
  const mockTransactions = [
    { transactionId: 1, customerId: 1, date: '2024-07-01', amount: 120 },
    { transactionId: 2, customerId: 1, date: '2024-07-15', amount: 80 },
    { transactionId: 3, customerId: 2, date: '2024-08-10', amount: 150 }
  ];

  it('groups transactions by month and year', () => {
    const grouped = groupTransactionsByMonth(mockTransactions);
    expect(grouped).toHaveProperty('July 2024');
    expect(grouped['July 2024'].length).toBe(2);
    expect(grouped).toHaveProperty('August 2024');
    expect(grouped['August 2024'].length).toBe(1);
  });
});
