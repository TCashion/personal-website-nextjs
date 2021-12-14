import { useState } from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import Overlay from './Overlay';
import { INavLink } from '../@types/interfaces';

const links: INavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'Blog', href: '/posts' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const handleClick = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <header className="overflow-hidden flex flex-col">
      <h1 className="hidden sm:flex self-center mt-8">Travis G. Cashion</h1>
      <Nav links={links} />
      <p
        id="hamburger-menu"
        className="sm:hidden mx-8 my-4 icon text-4xl"
        onClick={handleClick}
      >
        menu
      </p>
      <SideNav links={links} visible={sideNavVisible} />
      <Overlay visible={sideNavVisible} handleClick={handleClick} />
    </header>
  );
};

export default Header;
