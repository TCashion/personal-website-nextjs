import React from 'react';
import { ICardWithImageProps } from '../types/types';

const CardWithImage = React.forwardRef(
  ({
    children,
    extraClasses,
    imageUrl,
    title,
    subtitle,
  }: ICardWithImageProps) => {
    const className = `shadow-light hover:shadow-extralight text-left overflow-hidden bg-secondary rounded-lg m-4 max-w-900 max-h-full sm:max-h-300  ${extraClasses}`;

    return (
      <article className={className}>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3">
            <img
              className="h-full w-full object-cover"
              src={imageUrl}
              alt="preview image"
            />
          </div>
          <div className="w-auto sm:w-2/3 m-4">
            {title ? (
              <h2 className="font-semibold border-b-8 border-gray-700 py-2 mb-2">
                {title}
                {subtitle ? (
                  <span className="text-lg"> - {subtitle}</span>
                ) : null}
              </h2>
            ) : null}
            {children}
          </div>
        </div>
      </article>
    );
  }
);

CardWithImage.displayName = 'CardWithImage';

export default CardWithImage;
