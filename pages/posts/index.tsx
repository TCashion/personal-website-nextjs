import Link from 'next/link';
import Layout from '../../components/Layout';
import CardWithImage from '../../components/CardWithImage';
import { IPost } from '../../types/types';
import { GetStaticProps } from 'next';
import { formatDate, byNewestFirst } from '../../lib/helpers';
import { postsData } from '../../lib/posts/postsService';

interface IProps {
  posts: IPost[];
}

const PostsHome = ({ posts }: IProps) => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        {posts.map((post) => (
          <Link
            key={`${post.title}-link`}
            href={'/posts/[slug]'}
            as={`/posts/${post.slug}`}
            passHref
          >
            <CardWithImage
              imageUrl={post.previewImgSrc}
              key={post.title}
              title={post.title}
              subtitle={formatDate(post)}
            >
              <p className="mr-8">{post.preview}</p>
            </CardWithImage>
          </Link>
        ))}
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
