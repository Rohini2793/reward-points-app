import { render, screen } from '@testing-library/react';
import AggregatedTable from '../src/components/AggregatedTable';

const transactionsByMonth = {
  'July 2024': [
    { customerId: 1, name: 'John Doe', transactionId: 101, amount: 120 },
    { customerId: 2, name: 'Jane Smith', transactionId: 201, amount: 200 }
  ],
  'August 2024': [
    { customerId: 1, name: 'John Doe', transactionId: 102, amount: 80 }
  ]
};

describe('AggregatedTable', () => {
  it('renders total points per customer', () => {
    render(<AggregatedTable transactionsByMonth={transactionsByMonth} />);
    expect(screen.getByText('Customer 1')).toBeInTheDocument();
    expect(screen.getByText('120.00')).toBeInTheDocument(); // Total points for Customer 1
    expect(screen.getByText('Customer 2')).toBeInTheDocument();
    expect(screen.getByText('250.00')).toBeInTheDocument(); // Total points for Customer 2
  });
});
