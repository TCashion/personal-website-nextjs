import Link from 'next/link';
import { INavProps } from '../types/types';

const Sidenav = ({ links, visible }: INavProps) => {
  return (
    <nav
      className={`${
        visible ? 'block' : 'hidden'
      } justify-center bg-primary p-8 h-full w-9/12 fixed top-0 z-10`}
    >
      <ul className="flex flex-col">
        {links.map((link, idx) => (
          <div key={`nav-link-container-${link.href}-${link.label}`}>
            <li
              className="pr-8 pl-8 my-4"
              key={`nav-link-${link.href}-${link.label}`}
            >
              <Link href={link.href}>
                <span data-test-id={`side-nav-${link.label.toLowerCase()}`} aria-label={link.label} className="text-xl">
                  {link.label}
                </span>
              </Link>
            </li>
            {idx < links.length - 1 && (
              <div
                key={`divider-${link.href}-${link.label}`}
                className="divider"
              ></div>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;
