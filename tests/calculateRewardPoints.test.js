import { calculateRewardPoints } from '../src/utils/calculateRewardPoints';

describe('calculateRewardPoints', () => {
  it('returns 0 points for transactions less than or equal to $50', () => {
    expect(calculateRewardPoints(50)).toBe('0.00');
    expect(calculateRewardPoints(30)).toBe('0.00');
  });

  it('returns 1 point for each dollar between $50 and $100', () => {
    expect(calculateRewardPoints(80)).toBe('30.00'); // 1 point for each dollar over $50
    expect(calculateRewardPoints(100)).toBe('50.00'); // 1 point for each dollar up to $100
  });

  it('returns 2 points for each dollar over $100', () => {
    expect(calculateRewardPoints(120)).toBe('90.00'); // 50 points + 2 points per dollar over $100
    expect(calculateRewardPoints(150)).toBe('150.00'); // 50 points + 100 points for $50 over $100
  });
});
