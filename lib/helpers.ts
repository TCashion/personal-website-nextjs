import { IProject, IPost } from '../types/types';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const parseMonthYear = ({ date }: Pick<IProject | IPost, 'date'>) => {
  const [monthText, yearText] = date.split('/');
  const month = Number(monthText);
  const year = Number(yearText);

  return { month, year };
};

export const formatDate = (parent: Pick<IProject | IPost, 'date'>): string => {
  const { month, year } = parseMonthYear(parent);

  if (!Number.isInteger(month) || month < 1 || month > 12 || !Number.isInteger(year)) {
    throw new Error(`Invalid date metadata "${parent.date}". Expected MM/YYYY.`);
  }

  const monthLabel = months[month - 1];
  return `${monthLabel}, ${year}`;
};

export const byNewestFirst = (
  a: Pick<IProject | IPost, 'date'>,
  b: Pick<IProject | IPost, 'date'>
): number => {
  const aParsed = parseMonthYear(a);
  const bParsed = parseMonthYear(b);

  if (aParsed.year !== bParsed.year) {
    return bParsed.year - aParsed.year;
  }

  return bParsed.month - aParsed.month;
};

export const byOldestFirst = (
  a: Pick<IProject | IPost, 'date'>,
  b: Pick<IProject | IPost, 'date'>
): number => {
  const aParsed = parseMonthYear(a);
  const bParsed = parseMonthYear(b);

  if (aParsed.year !== bParsed.year) {
    return aParsed.year - bParsed.year;
  }

  return aParsed.month - bParsed.month;
};
