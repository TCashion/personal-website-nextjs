import Link from 'next/link';
import { IPost } from '../../types/types';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as PostComponents from '../../lib/posts/components';
import { getAllPostSlugs, getOnePostData } from '../../lib/posts/postsService';
interface IProps {
  post: IPost;
}

const Post = ({ post }: IProps) => {
  const postComponent = `<${post.componentName} />`;

  return (
    <Layout>
      <div className="container p-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full">
            <div className="blog-go-back-container">
              <Link href="/posts">
                <a className="my-4">
                  <Button innerText="<< Go Back" type="button" />
                </a>
              </Link>
            </div>
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
        </div>
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
