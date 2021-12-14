import Link from 'next/link';
import Layout from '../../components/Layout';
import CardWithImage from '../../components/CardWithImage';
import Button from '../../components/Button';
import { POST_PREVIEWS } from '../../lib/posts/postsService';
import { IPost } from '../../types/types';
import { GetStaticProps } from 'next';
import { formatDate, byNewestFirst } from '../../lib/helpers';

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
  // const apolloClient = initApolloClient();
  // const postsData = await apolloClient.query({
  //   query: POST_PREVIEWS,
  // });
  // const posts: IPost[] = postsData.data.allPosts.map((post: any) => {
  //   const dateStr = post.date + '0000';
  //   const date = parseInt(dateStr);
  //   return {
  //     ...post,
  //     date,
  //   };
  // });
  // sortByDate(posts);

  return {
    props: {
      posts: [],
    },
  };
};

export default PostsHome;
