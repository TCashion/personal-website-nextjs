import Link from 'next/link';
import { INavProps } from '../types/types';

const Nav = ({ links }: INavProps) => {
  return (
    <nav className="hidden sm:flex justify-center m-4" data-testid="header-nav">
      <ul className="flex">
        {links.map((link) => (
          <li
            className="pr-8 pl-8 text-xl"
            key={`nav-link-${link.href}-${link.label}`}
          >
            <Link href={link.href}>
              <a data-test-id={`main-nav-${link.label.toLowerCase()}`}>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
