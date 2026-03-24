import { describe, expect, it } from '@jest/globals';
import {
  filterPostsByTag,
  getSortedPostTags,
  getSortedPostsData,
  postsData,
} from '../../../lib/posts/postsService';
import { byNewestFirst, formatDate } from '../../../lib/helpers';

describe('postsService', () => {
  it('stores one or more tags on every post', () => {
    postsData.forEach((post) => {
      expect(post.tags.length).toBeGreaterThan(0);
      post.tags.forEach((tag) => expect(typeof tag).toBe('string'));
    });
  });

  it('returns tags sorted alphabetically with duplicates removed', () => {
    expect(getSortedPostTags()).toEqual([
      'Career',
      'Creativity',
      'Family',
      'Health',
      'Hunting',
      'Learning',
      'Mindset',
      'Outdoors',
      'Programming',
      'Reflection',
      'Running',
      'Work',
      'Writing',
    ]);
  });

  it('filters posts by the selected tag and returns all posts when no tag is active', () => {
    expect(filterPostsByTag(postsData)).toHaveLength(postsData.length);
    expect(
      filterPostsByTag(postsData, 'Hunting').map(({ slug }) => slug),
    ).toEqual(['hunting-with-my-father', 'ritual', 'worn-out-boots']);
  });

  it('returns posts sorted newest-first without mutating the original metadata array', () => {
    const originalOrder = postsData.map(({ slug }) => slug);
    const sortedPosts = getSortedPostsData();

    expect(sortedPosts.map(({ slug }) => slug)).toEqual(
      [...postsData].sort(byNewestFirst).map(({ slug }) => slug),
    );
    expect(postsData.map(({ slug }) => slug)).toEqual(originalOrder);
  });

  it('formats the existing blog metadata into the currently displayed month and year labels', () => {
    expect(
      postsData.map((post) => ({ slug: post.slug, date: formatDate(post) })),
    ).toEqual([
      { slug: 'a-letter-to-my-pre-bootcamp-self', date: 'September, 2020' },
      { slug: 'hunting-with-my-father', date: 'July, 2019' },
      { slug: 'just-the-right-thing', date: 'July, 2019' },
      { slug: 'maf', date: 'March, 2019' },
      { slug: 'one-really-well-written-paragraph', date: 'July, 2019' },
      { slug: 'ritual', date: 'January, 2020' },
      { slug: 'most-important-question', date: 'June, 2019' },
      { slug: 'where-is-the-fear', date: 'July, 2019' },
      { slug: 'worn-out-boots', date: 'September, 2019' },
      { slug: 'go-lang', date: 'November, 2022' },
    ]);
  });
});
