import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { initApolloClient } from '../../lib/apollo';
import { IPost, ISlugs } from '../../@types/interfaces';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ImageCard, { imageCardStyles } from '../../components/ImageCard';
import { GetStaticPaths, GetStaticProps } from 'next';
import { POST_DATA, POST_SLUGS } from '../../lib/posts/postsService';
import { formatDate } from '../../lib/helpers';

interface IProps {
  post: IPost;
}

const recursiveChildren = (childrenArr: HTMLCollection): void => {
  let length = childrenArr.length;
  for (let i = 0; i < length; i++) {
    if (childrenArr[i].children.length > 0) {
      for (let j = 0; j < childrenArr[i].children.length; j++) {
        let element = childrenArr[i].children[j];
        if (element.tagName === 'A') {
          element.setAttribute('target', '_blank');
          element.setAttribute('rel', 'noopener noreferrer');
          element.classList.add('underline');
        }
        if (
          element.tagName === 'IMG' &&
          element.parentElement &&
          element.parentElement.tagName === 'P'
        ) {
          const classesArr = imageCardStyles.split(' ');
          classesArr.push('w-full');
          classesArr.push('sm:w-30%');
          classesArr.push('float-left');
          classesArr.forEach((styleClass) =>
            element.parentElement?.classList.add(styleClass)
          );
        }
      }
      recursiveChildren(childrenArr[i].children);
    }
  }
};

const Project = ({ post }: IProps) => {
  const articleEl = useRef<HTMLElement>(null);
  useEffect(() => {
    if (articleEl.current) {
      recursiveChildren(articleEl.current.children);
    }
  }, []);

  return (
    <Layout>
      <div className="container p-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full">
            <Link href="/posts">
              <a className="my-4">
                <Button innerText="<< Go Back" type="button" />
              </a>
            </Link>
            <h1 className="my-4">{post.title}</h1>
            <h3 className="my-4 ">{formatDate(post)}</h3>
            <hr />
            <article className="blog-article" ref={articleEl}>
              <ImageCard
                extraClasses="w-full sm:w-1/2 float-right mx-auto sm:mx-6 mb-4"
                imageUrl={post.previewImgSrc}
              />
              <ReactMarkdown escapeHtml={false} source={post.content} />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initApolloClient();
  const slugsData = await apolloClient.query({
    query: POST_SLUGS,
  });
  const slugs = slugsData.data.allPosts;
  const paths: string[] = slugs.map(
    (postSlug: ISlugs) => `/posts/${postSlug.slug}`
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params && params.slug ? params.slug : '';
    const apolloClient = initApolloClient();
    const postData = await apolloClient.query({
      query: POST_DATA,
      variables: {
        postSlug: slug,
      },
    });
    let post: IPost = { ...postData.data.onePost };
    const dateStr = post.date + '0000';
    const date = parseInt(dateStr);
    post = {
      ...post,
      date,
    };
    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default Project;
