import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { IPost } from '../../types/types';
import { GetStaticProps } from 'next';
import { formatDate } from '../../lib/helpers';
import {
  filterPostsByTag,
  getSortedPostTags,
  getSortedPostsData,
} from '../../lib/posts/postsService';
import styles from '../../styles/ContentPages.module.css';

interface IProps {
  posts: IPost[];
  tags: string[];
}

const getTagFromQuery = (
  tagQuery: string | string[] | undefined
): string | null => {
  if (Array.isArray(tagQuery)) {
    return tagQuery[0] ?? null;
  }

  return tagQuery ?? null;
};

const PostsHome = ({ posts, tags }: IProps) => {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setSelectedTag(getTagFromQuery(router.query.tag));
  }, [router.isReady, router.query.tag]);

  const visiblePosts = filterPostsByTag(posts, selectedTag ?? undefined);
  const tagCounts = posts.reduce<Record<string, number>>((counts, post) => {
    post.tags.forEach((tag) => {
      counts[tag] = (counts[tag] ?? 0) + 1;
    });

    return counts;
  }, {});

  const updateTagFilter = async (tag: string | null) => {
    setSelectedTag(tag);

    if (tag) {
      await router.replace(
        {
          pathname: '/posts',
          query: { tag },
        },
        undefined,
        { shallow: true, scroll: false }
      );

      return;
    }

    await router.replace('/posts', undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Writing</p>
          <h2 className={styles.pageTitle}>Blog</h2>
        </header>
        <section aria-labelledby="blog-filters" className={styles.postFilters}>
          <div className={styles.filterHeader}>
            <div>
              <h3 className={styles.filterTitle} id="blog-filters">
                Filter by tag
              </h3>
              <p className={styles.filterSummary}>
                {selectedTag
                  ? `${visiblePosts.length} post${
                      visiblePosts.length === 1 ? '' : 's'
                    } tagged “${selectedTag}”`
                  : `Browse all ${posts.length} posts`}
              </p>
            </div>
            {selectedTag && (
              <button
                className={styles.clearFiltersButton}
                onClick={() => updateTagFilter(null)}
                type="button"
              >
                Clear filters
              </button>
            )}
          </div>
          <div aria-label="Blog tags" className={styles.filterChips} role="toolbar">
            <button
              aria-pressed={selectedTag === null}
              className={`${styles.filterChip} ${
                selectedTag === null ? styles.filterChipActive : ''
              }`}
              onClick={() => updateTagFilter(null)}
              type="button"
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                aria-pressed={selectedTag === tag}
                className={`${styles.filterChip} ${
                  selectedTag === tag ? styles.filterChipActive : ''
                }`}
                key={tag}
                onClick={() => updateTagFilter(tag)}
                type="button"
              >
                {tag} <span className={styles.filterChipCount}>({tagCounts[tag]})</span>
              </button>
            ))}
          </div>
        </section>
        {visiblePosts.length > 0 ? (
          <ul className={styles.postList}>
            {visiblePosts.map((post) => (
              <li key={post.title}>
                <Link
                  className={styles.postLink}
                  key={`${post.title}-link`}
                  href={'/posts/[slug]'}
                  as={`/posts/${post.slug}`}
                  passHref
                >
                  <article className={styles.postCard}>
                    <div className={styles.postCardInner}>
                      <div className={styles.postCardContent}>
                        <h3 className={styles.postHeading}>{post.title}</h3>
                        <ul aria-label={`${post.title} tags`} className={styles.postTagList}>
                          {post.tags.map((tag) => (
                            <li className={styles.postTag} key={`${post.slug}-${tag}`}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className={styles.postMeta}>{formatDate(post)}</p>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <section className={styles.emptyState}>
            <h3 className={styles.emptyStateTitle}>No posts match this tag yet.</h3>
            <p className={styles.emptyStateMessage}>
              Try another tag or return to the full blog list.
            </p>
            <button
              className={styles.clearFiltersButton}
              onClick={() => updateTagFilter(null)}
              type="button"
            >
              View all posts
            </button>
          </section>
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getSortedPostsData(),
      tags: getSortedPostTags(),
    },
  };
};

export default PostsHome;
