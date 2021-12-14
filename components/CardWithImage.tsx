import { IChildrenProps } from '../@types/interfaces';

const CardWithImage = ({
  children,
  extraClasses,
  imageUrl,
  title,
  subtitle,
}: IChildrenProps) => {
  const className = `text-left overflow-hidden bg-secondary rounded-lg m-4 ${extraClasses}`;

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
              {subtitle ? <span className="text-lg"> - {subtitle}</span> : null}
            </h2>
          ) : null}
          {children}
        </div>
      </div>
    </article>
  );
};

export default CardWithImage;
