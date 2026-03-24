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

  it('renders the current visible month and year for each project card', () => {
    const sortedProjects = [...projects].sort(byNewestFirst);

    render(<ProjectsHome projects={sortedProjects} />);

    [
      'January, 2025',
      'November, 2023',
      'December, 2021',
      'August, 2020',
      'July, 2020',
      'June, 2020',
      'May, 2020',
      'January, 2020',
    ].forEach((dateLabel) => {
      expect(screen.getAllByText(dateLabel).length).toBeGreaterThan(0);
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
