import { describe, expect, it, jest } from '@jest/globals';
import { render, screen } from '../../test-utils';
import {
  getAllPostSlugs,
  getOnePostData,
  postsData,
} from '../../../lib/posts/postsService';

jest.mock('../../../lib/posts/components', () => ({
  LetterToMyPreBootcampSelf: () => <article>LetterToMyPreBootcampSelf content</article>,
  HuntingWithMyFather: () => <article>HuntingWithMyFather content</article>,
  JustTheRightThing: () => <article>JustTheRightThing content</article>,
  MAF: () => <article>MAF content</article>,
  OneReallyWellWrittenParagraph: () => (
    <article>OneReallyWellWrittenParagraph content</article>
  ),
  Ritual: () => <article>Ritual content</article>,
  MostImportantQuestion: () => <article>MostImportantQuestion content</article>,
  WhereIsTheFear: () => <article>WhereIsTheFear content</article>,
  WornOutBoots: () => <article>WornOutBoots content</article>,
  LearningGolang: () => <article>LearningGolang content</article>,
}));

const {
  default: PostPage,
  getStaticPaths,
  getStaticProps,
} = require('../../../pages/posts/[slug]');

describe('PostPage', () => {
  it('renders the selected post component and a link back to the blog index', () => {
    const post = postsData[0];

    render(<PostPage post={post} />);

    expect(screen.getByRole('link', { name: /go back/i }).getAttribute('href')).toBe('/posts');
    expect(
      screen.getByText(new RegExp(`${post.componentName} content`))
    ).toBeTruthy();
  });

  it('returns all post detail routes from getStaticPaths', async () => {
    const result = await getStaticPaths({ locales: [], defaultLocale: 'en' });

    expect(result.fallback).toBe(false);
    expect(result.paths).toEqual(
      getAllPostSlugs().map((slug) => `/posts/${slug}`)
    );
  });

  it('returns the requested post from getStaticProps', async () => {
    const post = postsData[0];
    const result = await getStaticProps({ params: { slug: post.slug } });
    const props = 'props' in result ? result.props : undefined;

    expect(props).toBeDefined();
    expect(props?.post).toEqual(getOnePostData(post.slug));
  });
});
