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

export const sortByDate = (
  parentArr: IProject[] | IPost[]
): IProject[] | IPost[] => {
  return parentArr.sort((a: IProject | IPost, b: IProject | IPost): number => {
    if (a.timeStamp < b.timeStamp) {
      return 1;
    } else {
      return -1;
    }
  });
};
