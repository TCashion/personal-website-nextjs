import Link from 'next/link';
import { IPost } from '../../types/types';
import Layout from '../../components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as PostComponents from '../../lib/posts/components';
import { getAllPostSlugs, getOnePostData } from '../../lib/posts/postsService';
import styles from '../../styles/DetailPages.module.css';
interface IProps {
  post: IPost;
}

const Post = ({ post }: IProps) => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.backNavBlogPost}>
          <Link className={styles.backLink} href="/posts">
            <button className={styles.backButton} type="button">
              {'<< Go Back'}
            </button>
          </Link>
        </div>
        <article >
          <div className={styles.postContent}>
            {post.componentName === 'LetterToMyPreBootcampSelf' && (
              <PostComponents.LetterToMyPreBootcampSelf />
            )}
            {post.componentName === 'HuntingWithMyFather' && (
              <PostComponents.HuntingWithMyFather />
            )}
            {post.componentName === 'JustTheRightThing' && (
              <PostComponents.JustTheRightThing />
            )}
            {post.componentName === 'MAF' && <PostComponents.MAF />}
            {post.componentName === 'OneReallyWellWrittenParagraph' && (
              <PostComponents.OneReallyWellWrittenParagraph />
            )}
            {post.componentName === 'Ritual' && <PostComponents.Ritual />}
            {post.componentName === 'MostImportantQuestion' && (
              <PostComponents.MostImportantQuestion />
            )}
            {post.componentName === 'WhereIsTheFear' && (
              <PostComponents.WhereIsTheFear />
            )}
            {post.componentName === 'WornOutBoots' && (
              <PostComponents.WornOutBoots />
            )}
            {post.componentName === 'LearningGolang' && (
              <PostComponents.LearningGolang />
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs();
  const paths: string[] = slugs.map((postSlug: string) => `/posts/${postSlug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params && params.slug;
  const post = getOnePostData(slug as string);
  return {
    props: {
      post,
    },
  };
};

export default Post;
