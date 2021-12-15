import Link from 'next/link';
import Layout from '../../components/Layout';
import CardWithImage from '../../components/CardWithImage';
import Button from '../../components/Button';
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
          <CardWithImage
            extraClasses="w-full max-w-3xl shadow-light m-2 mx-8"
            imageUrl={post.previewImgSrc}
            key={post.title}
            title={post.title}
            subtitle={formatDate(post)}
          >
            <p className="mr-8">{post.preview}</p>
            <Link href={'/posts/[slug]'} as={`/posts/${post.slug}`}>
              <a>
                <Button innerText="See more" type="button" />
              </a>
            </Link>
          </CardWithImage>
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
