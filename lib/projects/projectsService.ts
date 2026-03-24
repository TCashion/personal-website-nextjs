import { IProject } from '../../types/types';
import { byNewestFirst } from '../helpers';
import { projects } from './projectsData';

export const getAllProjects = (): IProject[] => [...projects].sort(byNewestFirst);

export const getAllProjectSlugs = (): string[] => {
  const projectSlugs = projects.map((project) => project.slug);
  return projectSlugs;
};

export const getOneProjectData = (slug: string): IProject | undefined => {
  const project = projects.find((project) => project.slug === slug);
  return project;
};
