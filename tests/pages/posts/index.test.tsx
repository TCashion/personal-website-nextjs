import { describe, expect, it } from '@jest/globals';
import { render, screen } from '../../test-utils';
import PostsHome, { getStaticProps } from '../../../pages/posts';
import { byNewestFirst } from '../../../lib/helpers';
import { postsData } from '../../../lib/posts/postsService';

describe('PostsHome', () => {
  it('renders a link for every post using the provided data', () => {
    const posts = [...postsData].sort(byNewestFirst);

    render(<PostsHome posts={posts} />);

    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeTruthy();

    posts.forEach((post) => {
      const link = screen.getByText(post.title).closest('a');

      expect(link).not.toBeNull();
      expect(link?.getAttribute('href')).toBe(`/posts/${post.slug}`);
    });
  });

  it('returns posts sorted newest-first from getStaticProps', async () => {
    const result = await getStaticProps({});
    const props = 'props' in result ? result.props : undefined;

    expect(props).toBeDefined();
    expect(props?.posts).toHaveLength(postsData.length);

    const returnedPosts = props?.posts ?? [];
    const expectedOrder = [...postsData].sort(byNewestFirst).map(({ slug }) => slug);

    expect(returnedPosts.map(({ slug }: { slug: string }) => slug)).toEqual(expectedOrder);
  });
});
