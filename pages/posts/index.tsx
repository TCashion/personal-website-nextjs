import Link from 'next/link';
import Layout from '../../components/Layout';
import { IPost } from '../../types/types';
import { GetStaticProps } from 'next';
import { formatDate, byNewestFirst } from '../../lib/helpers';
import { postsData } from '../../lib/posts/postsService';
import styles from '../../styles/ContentPages.module.css';

interface IProps {
  posts: IPost[];
}

const PostsHome = ({ posts }: IProps) => {
  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Writing</p>
          <h2 className={styles.pageTitle}>Blog</h2>
        </header>
        <ul className={styles.postList}>
          {posts.map((post) => (
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
                    <h3 className={styles.postHeading}>{post.title}</h3>
                    <p className={styles.postMeta}>{formatDate(post)}</p>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  postsData.sort(byNewestFirst);

  return {
    props: {
      posts: postsData,
    },
  };
};

export default PostsHome;
