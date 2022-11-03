import Link from 'next/link';
import Layout from '../../components/Layout';
import { IPost } from '../../types/types';
import { GetStaticProps } from 'next';
import { formatDate, byNewestFirst } from '../../lib/helpers';
import { postsData } from '../../lib/posts/postsService';
import BlogLink from '../../components/BlogLink';

interface IProps {
  posts: IPost[];
}

const PostsHome = ({ posts }: IProps) => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        <div className="px-2 w-full max-w-850">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl m-10" >Blog</h2>
          <ul>
            {posts.map((post) => (
              <li className="m-4" key={post.title}>
                <Link
                  key={`${post.title}-link`}
                  href={'/posts/[slug]'}
                  as={`/posts/${post.slug}`}
                  passHref
                >
                  <BlogLink
                    title={post.title}
                    subtitle={formatDate(post)}
                  ></BlogLink>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
