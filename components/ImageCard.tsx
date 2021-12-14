interface IProps {
  imageUrl: string;
  extraClasses?: string;
}

export const imageCardStyles = 'rounded-lg overflow-hidden mx-2';

const ImageCard = ({ imageUrl, extraClasses }: IProps) => {
  const className = `${imageCardStyles} ${extraClasses}`;

  return (
    <div className={className}>
      <img src={imageUrl} alt="Preview Image Large" />
    </div>
  );
};

export default ImageCard;
