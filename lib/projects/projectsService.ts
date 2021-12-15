import { IProject } from '../../types/types';
import { projects } from './projectsData';

export const getAllProjects = (): IProject[] => {
  return projects
    .sort((a, b) => {
      if (a.timeStamp < b.timeStamp) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((project) => ({
      ...project,
      date: formatProjectDate(project),
    }));
};

export const getAllProjectSlugs = (): string[] => {
  const projectSlugs = projects.map((project) => project.slug);
  return projectSlugs;
};

export const getOneProjectData = (slug: string): IProject | undefined => {
  const project = projects.find((project) => project.slug === slug);
  return project;
};

export const formatProjectDate = (project: IProject): string => {
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
  const date: Date = new Date(project.timeStamp);
  const month: string = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month}, ${year}`;
};