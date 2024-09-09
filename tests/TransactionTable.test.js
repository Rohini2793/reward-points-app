import { render, screen } from '@testing-library/react';
import TransactionTable from '../src/components/TransactionTable';

const mockTransactions = [
  { customerId: 1, name: 'John Doe', transactionId: 101, date: '2024-07-01', amount: 120 },
  { customerId: 2, name: 'Jane Smith', transactionId: 201, date: '2024-07-15', amount: 200 },
];

describe('TransactionTable', () => {
  it('renders transaction data in a table', () => {
    render(<TransactionTable transactions={mockTransactions} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('$120')).toBeInTheDocument();
    expect(screen.getByText('$200')).toBeInTheDocument();
  });
});
