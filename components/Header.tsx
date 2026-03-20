import { useState } from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Overlay from './Overlay';
import { INavLink } from '../types/types';
import styles from '../styles/Chrome.module.css';

const links: INavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/posts' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const handleClick = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Travis G. Cashion</h1>
      <Nav links={links} />
      <button
        data-test-id="hamburger-menu"
        id="hamburger-menu"
        className={`${styles.menuButton} icon`}
        onClick={handleClick}
        type="button"
        aria-label="Open menu"
      >
        menu
      </button>
      <SideNav links={links} visible={sideNavVisible} />
      <Overlay visible={sideNavVisible} handleClick={handleClick} />
    </header>
  );
};

export default Header;
