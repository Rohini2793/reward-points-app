import { render, screen, waitFor } from '@testing-library/react';
import RewardPoints from '../src/components/RewardPoints';
import { fetchTransactions } from '../src/utils/api';

// Mock the API call
jest.mock('../src/utils/api');

const mockTransactions = [
  { customerId: 1, name: 'John Doe', transactionId: 101, date: '2024-07-01', amount: 120 },
  { customerId: 2, name: 'Jane Smith', transactionId: 201, date: '2024-07-15', amount: 200 },
];

describe('RewardPoints Component', () => {
  beforeEach(() => {
    fetchTransactions.mockResolvedValue(mockTransactions);
  });

  it('renders loading state initially', () => {
    render(<RewardPoints />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders transaction data after fetching', async () => {
    render(<RewardPoints />);
    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
    expect(await screen.findByText(/Jane Smith/i)).toBeInTheDocument();
  });  

  it('renders error message on API error', async () => {
    fetchTransactions.mockRejectedValueOnce(new Error('API error'));
    render(<RewardPoints />);
    await waitFor(() => {
      expect(screen.getByText(/Error fetching transactions/i)).toBeInTheDocument();
    });
  });
});
