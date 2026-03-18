import { describe, expect, it } from '@jest/globals';
import { render, screen } from '../../test-utils';
import ProjectPage, {
  getStaticPaths,
  getStaticProps,
} from '../../../pages/projects/[slug]';
import {
  getAllProjectSlugs,
  getOneProjectData,
} from '../../../lib/projectsService';
import { projects } from '../../../lib/projects/projectsData';

describe('ProjectPage', () => {
  it('renders project metadata, resource links, and collaborators when present', () => {
    const project = projects.find(({ slug }) => slug === 'gas-app');

    if (!project) {
      throw new Error('Expected gas-app project fixture to exist');
    }

    render(<ProjectPage project={project} />);

    expect(screen.getByRole('heading', { level: 2, name: project.title })).toBeTruthy();
    expect(screen.getByText(project.description)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 3, name: /tech used:/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /go back/i }).getAttribute('href')).toBe('/projects');
    expect(screen.getByRole('link', { name: 'GitHub' }).getAttribute('href')).toBe(
      project.githubUrl
    );
    expect(screen.getByRole('link', { name: 'Live App' }).getAttribute('href')).toBe(
      project.liveAppUrl
    );

    project.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeTruthy();
    });

    project.collaborators?.forEach((collaborator) => {
      expect(screen.getByRole('link', { name: collaborator.name }).getAttribute('href')).toBe(
        collaborator.portfolioUrl
      );
    });
  });

  it('renders private projects without an active GitHub href', () => {
    const project = projects.find(({ slug }) => slug === 'bex');

    if (!project) {
      throw new Error('Expected bex project fixture to exist');
    }

    render(<ProjectPage project={project} />);

    expect(
      (screen.getByRole('button', { name: /github \(private\)/i }) as HTMLButtonElement)
        .disabled
    ).toBe(true);
    expect(screen.queryByRole('link', { name: 'Live App' })).toBeNull();
  });

  it('returns all project detail routes from getStaticPaths', async () => {
    const result = await getStaticPaths({ locales: [], defaultLocale: 'en' });

    expect(result.fallback).toBe(false);
    expect(result.paths).toEqual(
      getAllProjectSlugs().map((slug) => `/projects/${slug}`)
    );
  });

  it('returns the requested project from getStaticProps', async () => {
    const project = projects[0];
    const result = await getStaticProps({ params: { slug: project.slug } });
    const props = 'props' in result ? result.props : undefined;

    expect(props).toBeDefined();
    expect(props?.project).toEqual(getOneProjectData(project.slug));
  });
});
