import React from 'react';
import { IBlogLinkProps } from '../types/types';

const BlogLink = React.forwardRef(
  ({ children, title, subtitle }: IBlogLinkProps) => {
    return (
      <article>
        {title ? (
          <h2 className="text-base md:text-2xl">
            <span className="font-semibold mx-4 border-b-2 border-gray-700">
              {title}
            </span>
            {subtitle ? <span>{subtitle}</span> : null}
          </h2>
        ) : null}
        {children}
      </article>
    );
  }
);

BlogLink.displayName = 'BlogLink';

export default BlogLink;
