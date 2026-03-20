import styles from '../styles/Chrome.module.css';

interface Props {
  visible: boolean;
  handleClick: () => void;
}

const Overlay = ({ visible, handleClick }: Props) => {
  return (
    <div
      className={visible ? styles.overlay : styles.overlayHidden}
      onClick={handleClick}
    ></div>
  );
};

export default Overlay;
