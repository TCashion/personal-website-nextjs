import { describe, expect, it } from '@jest/globals';
import {
  byNewestFirst,
  byOldestFirst,
  formatDate,
} from '../../lib/helpers';

describe('helpers', () => {
  it('formats month-year metadata exactly as rendered to users', () => {
    expect(formatDate({ date: '01/2020' })).toBe('January, 2020');
    expect(formatDate({ date: '12/2021' })).toBe('December, 2021');
  });

  it('sorts newer month-year metadata ahead of older items', () => {
    expect(
      [
        { slug: 'oldest', date: '01/2020' },
        { slug: 'newest', date: '11/2023' },
        { slug: 'middle', date: '12/2021' },
      ].sort(byNewestFirst)
    ).toEqual([
      { slug: 'newest', date: '11/2023' },
      { slug: 'middle', date: '12/2021' },
      { slug: 'oldest', date: '01/2020' },
    ]);
  });

  it('sorts older month-year metadata ahead of newer items when requested', () => {
    expect(
      [
        { slug: 'newest', date: '11/2023' },
        { slug: 'middle', date: '12/2021' },
        { slug: 'oldest', date: '01/2020' },
      ].sort(byOldestFirst)
    ).toEqual([
      { slug: 'oldest', date: '01/2020' },
      { slug: 'middle', date: '12/2021' },
      { slug: 'newest', date: '11/2023' },
    ]);
  });
});
