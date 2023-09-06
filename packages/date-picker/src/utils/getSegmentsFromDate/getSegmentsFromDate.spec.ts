import { getSegmentsFromDate } from '.';

describe('packages/date-picker/utils/getSegmentsFromDate', () => {
  test('returns UTC d/m/y values', () => {
    const utc = new Date(Date.UTC(2023, 8, 1));
    const segments = getSegmentsFromDate(utc);
    expect(segments).toBeDefined();
    expect(segments.day).toBe(1);
    expect(segments.month).toBe(9);
    expect(segments.year).toBe(2023);
  });
});
