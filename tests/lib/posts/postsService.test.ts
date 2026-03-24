import { describe, expect, it } from '@jest/globals';
import {
  filterPostsByTag,
  getSortedPostTags,
  getSortedPostsData,
  postsData,
} from '../../../lib/posts/postsService';
import { byNewestFirst } from '../../../lib/helpers';

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
      'Tradition',
      'Work',
      'Writing',
    ]);
  });

  it('filters posts by the selected tag and returns all posts when no tag is active', () => {
    expect(filterPostsByTag(postsData)).toHaveLength(postsData.length);
    expect(filterPostsByTag(postsData, 'Hunting').map(({ slug }) => slug)).toEqual([
      'hunting-with-my-father',
      'worn-out-boots',
    ]);
  });

  it('returns posts sorted newest-first without mutating the original metadata array', () => {
    const originalOrder = postsData.map(({ slug }) => slug);
    const sortedPosts = getSortedPostsData();

    expect(sortedPosts.map(({ slug }) => slug)).toEqual(
      [...postsData].sort(byNewestFirst).map(({ slug }) => slug)
    );
    expect(postsData.map(({ slug }) => slug)).toEqual(originalOrder);
  });
});
