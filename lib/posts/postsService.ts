import gql from 'graphql-tag';

export const POST_SLUGS = gql`
  query PostSlugs {
    allPosts {
      slug
    }
  }
`;
export const POST_PREVIEWS = gql`
  query PostPreviews {
    allPosts {
      title
      date
      slug
      previewImgSrc
      preview
    }
  }
`;

export const POST_DATA = gql`
  query PostData($postSlug: String) {
    onePost(postSlug: $postSlug) {
      title
      date
      previewImgSrc
      content
    }
  }
`;
