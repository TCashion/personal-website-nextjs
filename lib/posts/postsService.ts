// import gql from 'graphql-tag';

import { timeStamp } from 'console';
import { IPost } from '../../types/types';

// export const POST_SLUGS = gql`
//   query PostSlugs {
//     allPosts {
//       slug
//     }
//   }
// `;
// export const POST_PREVIEWS = gql`
//   query PostPreviews {
//     allPosts {
//       title
//       date
//       slug
//       previewImgSrc
//       preview
//     }
//   }
// `;

// export const POST_DATA = gql`
//   query PostData($postSlug: String) {
//     onePost(postSlug: $postSlug) {
//       title
//       date
//       previewImgSrc
//       content
//     }
//   }
// `;

export const postsData: IPost[] = [
  {
    slug: 'a-letter-to-my-pre-bootcamp-self',
    timeStamp: 159919920,
    title: 'A letter to my pre-bootcamp self',
    previewImgSrc: '/images/blog/a-letter.png',
    preview:
      'Enrolling in a bootcamp takes some serious guts. Leaving behind a stable job and regular pay can be daunting. Even if your job is not stable or comfortable, going 12+ weeks without pay is extremely scary...',
    componentName: 'LetterToMyPreBootcampSelf',
  },
];

export const getOnePostData = (slug: string): IPost | undefined => {
  const post = postsData.find((post) => post.slug === slug);
  return post;
};

export const getAllPostSlugs = (): string[] => {
  const postSlugs = postsData.map((post) => post.slug);
  return postSlugs;
};