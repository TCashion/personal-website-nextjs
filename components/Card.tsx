import { IChildrenProps } from '../types/types';

const Card = ({
  children,
  extraClasses,
  imageUrl,
  title,
  subtitle,
}: IChildrenProps) => {
  const className = `text-left overflow-hidden bg-secondary rounded-lg m-4 ${extraClasses}`;

  return (
    <article className={className}>
      <div className="m-4">
        {title ? (
          <h2 className="font-semibold border-b-8 border-gray-700 py-2 mb-2">
            {title}
            {subtitle ? <span className="text-lg"> - {subtitle}</span> : null}
          </h2>
        ) : null}
        {children}
      </div>
    </article>
  );
};

export default Card;
