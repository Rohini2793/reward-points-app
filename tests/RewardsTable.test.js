import { render, screen } from '@testing-library/react';
import RewardsTable from '../src/components/RewardsTable';

const transactionsByMonth = {
  'July 2024': [
    { customerId: 1, name: 'John Doe', transactionId: 101, amount: 120 },
    { customerId: 2, name: 'Jane Smith', transactionId: 201, amount: 200 }
  ]
};

describe('RewardsTable', () => {
  it('renders reward points by month', () => {
    render(<RewardsTable transactionsByMonth={transactionsByMonth} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('90.00')).toBeInTheDocument(); // John Doe's points for $120
    expect(screen.getByText('250.00')).toBeInTheDocument(); // Jane Smith's points for $200
  });
});
