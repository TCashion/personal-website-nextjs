import Link from 'next/link';
import { INavProps } from '../@types/interfaces';

const Sidenav = ({ links, visible }: INavProps) => {
  return (
    <nav
      className={`${
        visible ? 'block' : 'hidden'
      } justify-center bg-primary p-8 h-full w-9/12 fixed top-0 z-10`}
    >
      <ul className="flex flex-col">
        {links.map((link) => (
          <li
            className="pr-8 pl-8 my-2"
            key={`nav-link-${link.href}-${link.label}`}
          >
            <Link href={link.href}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;
