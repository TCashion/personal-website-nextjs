import { describe, expect, it } from '@jest/globals';
import { render, screen } from '../../test-utils';
import ProjectsHome, { getStaticProps } from '../../../pages/projects';
import { byNewestFirst } from '../../../lib/helpers';
import { projects } from '../../../lib/projects/projectsData';

describe('ProjectsHome', () => {
  it('renders a link for every project using the provided data', () => {
    const sortedProjects = [...projects].sort(byNewestFirst);

    render(<ProjectsHome projects={sortedProjects} />);

    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeTruthy();

    sortedProjects.forEach((project) => {
      const link = screen.getByText(project.title).closest('a');

      expect(link).not.toBeNull();
      expect(link?.getAttribute('href')).toBe(`/projects/${project.slug}`);
    });
  });

  it('returns projects sorted newest-first from getStaticProps', async () => {
    const result = await getStaticProps({});
    const props = 'props' in result ? result.props : undefined;

    expect(props).toBeDefined();
    expect(props?.projects).toHaveLength(projects.length);

    const returnedProjects = props?.projects ?? [];
    const expectedOrder = [...projects].sort(byNewestFirst).map(({ slug }) => slug);

    expect(
      returnedProjects.map(({ slug }: { slug: string }) => slug)
    ).toEqual(expectedOrder);
  });
});
