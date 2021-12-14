import { IChildrenProps } from '../@types/interfaces';

const InvisiCard = ({ children, title }: IChildrenProps) => {
  return (
    <article className="text-left p-4 shadow-light bg-primary bg-opacity-50 rounded-lg my-auto mx-auto">
      {title ? <h3 className="font-semibold py-2 mb-2">{title}</h3> : null}
      {children}
    </article>
  );
};

export default InvisiCard;
