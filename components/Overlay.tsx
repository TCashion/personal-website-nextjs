interface Props {
  visible: boolean;
  handleClick: () => void;
}

const Overlay = ({ visible, handleClick }: Props) => {
  return (
    <div
      className={`${
        visible ? 'block' : 'hidden'
      } bg-black bg-opacity-25 h-full w-full top-0 fixed z-0`}
      onClick={handleClick}
    ></div>
  );
};

export default Overlay;
