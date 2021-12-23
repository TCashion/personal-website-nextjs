import { MouseEvent } from 'react';

interface IProps {
  disabled?: boolean;
  innerText: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
  type: 'button' | 'submit' | 'reset';
}

export const btnDefaultStyle: string =
  'shadow cursor-default bg-gray-300 focus:shadow-outline focus:outline-none text-white font-bold my-2 py-2 px-4 ';
export const btnEnabledStyle: string =
  'cursor-pointer hover:shadow-light hover:bg-jade-default bg-jade-darker';

const Button = ({ disabled, innerText, onClick, type }: IProps) => {
  const style = disabled ? btnDefaultStyle : btnDefaultStyle + btnEnabledStyle;

  return (
    <button className={style} disabled={disabled} onClick={onClick} type={type}>
      {innerText}
    </button>
  );
};

export default Button;
