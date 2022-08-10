import { describe, it, expect } from 'vitest';
import useDateToQueryDate from './useDateToQueryDate';

describe('date conversion to query string', async () => {
  it('converts date to string with padded zeros', () => {
    const date = new Date(2022, 0, 1);
    const converted = useDateToQueryDate(date);
    expect(converted).toEqual('2022-01-01');
  });
});
