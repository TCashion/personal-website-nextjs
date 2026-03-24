import { describe, expect, it } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import PostsHome, { getStaticProps } from '../../../pages/posts';
import { byNewestFirst } from '../../../lib/helpers';
import {
  getSortedPostTags,
  postsData,
} from '../../../lib/posts/postsService';

const replace = jest.fn();
const useRouter = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => useRouter(),
}));

describe('PostsHome', () => {
  beforeEach(() => {
    replace.mockReset();
    useRouter.mockReturnValue({
      isReady: true,
      query: {},
      replace,
    });
  });

  it('renders a link for every post using the provided data', () => {
    const posts = [...postsData].sort(byNewestFirst);

    render(<PostsHome posts={posts} tags={getSortedPostTags()} />);

    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeTruthy();

    posts.forEach((post) => {
      const link = screen.getByText(post.title).closest('a');

      expect(link).not.toBeNull();
      expect(link?.getAttribute('href')).toBe(`/posts/${post.slug}`);
    });
  });

  it('renders the current visible month and year for each blog post card', () => {
    const posts = [...postsData].sort(byNewestFirst);

    render(<PostsHome posts={posts} tags={getSortedPostTags()} />);

    [
      'November, 2022',
      'September, 2020',
      'July, 2020',
      'June, 2020',
      'January, 2020',
      'September, 2019',
      'July, 2019',
      'March, 2019',
    ].forEach((dateLabel) => {
      expect(screen.getAllByText(dateLabel).length).toBeGreaterThan(0);
    });
  });

  it('renders tag controls in alphabetical order', () => {
    const posts = [...postsData].sort(byNewestFirst);

    render(<PostsHome posts={posts} tags={getSortedPostTags()} />);

    const toolbar = screen.getByRole('toolbar', { name: 'Blog tags' });
    const buttons = toolbar.querySelectorAll('button');
    const labels = Array.from(buttons).map((button) =>
      button.textContent?.replace(/\s+\(\d+\)/, '')
    );

    expect(labels).toEqual(['All', ...getSortedPostTags()]);
  });

  it('filters posts when a tag is selected and makes the selection visually clear', async () => {
    const posts = [...postsData].sort(byNewestFirst);

    render(<PostsHome posts={posts} tags={getSortedPostTags()} />);

    fireEvent.click(screen.getByRole('button', { name: /Hunting \(3\)/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Hunting \(3\)/i })).toHaveAttribute(
        'aria-pressed',
        'true'
      );
    });

    expect(screen.getByText('Hunting With My Father')).toBeInTheDocument();
    expect(screen.getByText('Ritual')).toBeInTheDocument();
    expect(screen.getByText('Worn Out Boots')).toBeInTheDocument();
    expect(screen.queryByText('Where is the Fear?')).not.toBeInTheDocument();
    expect(replace).toHaveBeenCalledWith(
      {
        pathname: '/posts',
        query: { tag: 'Hunting' },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  });

  it('clears the active tag filter and restores the full list', async () => {
    const posts = [...postsData].sort(byNewestFirst);

    render(<PostsHome posts={posts} tags={getSortedPostTags()} />);

    fireEvent.click(screen.getByRole('button', { name: /Mindset \(3\)/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Clear filters' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute(
        'aria-pressed',
        'true'
      );
    });

    expect(screen.getByText('Ritual')).toBeInTheDocument();
    expect(screen.getByText('What I Learned from Learning GoLang')).toBeInTheDocument();
    expect(replace).toHaveBeenLastCalledWith('/posts', undefined, {
      shallow: true,
      scroll: false,
    });
  });

  it('applies the tag from the URL query string and shows a graceful empty state for unknown tags', async () => {
    const posts = [...postsData].sort(byNewestFirst);

    useRouter.mockReturnValue({
      isReady: true,
      query: { tag: 'Unknown' },
      replace,
    });

    render(<PostsHome posts={posts} tags={getSortedPostTags()} />);

    await waitFor(() => {
      expect(screen.getByText('No posts match this tag yet.')).toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: 'Clear filters' })).toBeInTheDocument();
  });

  it('returns posts sorted newest-first from getStaticProps', async () => {
    const result = await getStaticProps({});
    const props = 'props' in result ? result.props : undefined;

    expect(props).toBeDefined();
    expect(props?.posts).toHaveLength(postsData.length);
    expect(props?.tags).toEqual(getSortedPostTags());

    const returnedPosts = props?.posts ?? [];
    const expectedOrder = [...postsData].sort(byNewestFirst).map(({ slug }) => slug);

    expect(returnedPosts.map(({ slug }: { slug: string }) => slug)).toEqual(expectedOrder);
  });
});
