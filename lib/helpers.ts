import { IProject, IPost } from '../types/types';

export const formatDate = (parent: IProject | IPost): string => {
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
  const date: Date = new Date(parent.timeStamp);
  const month: string = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month}, ${year}`;
};

export const byNewestFirst = (
  a: IProject | IPost,
  b: IProject | IPost
): number => b.timeStamp - a.timeStamp;

export const byOldestFirst = (
  a: IProject | IPost,
  b: IProject | IPost
): number => a.timeStamp - b.timeStamp;
