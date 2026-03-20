import Link from 'next/link';
import { INavProps } from '../types/types';
import styles from '../styles/Chrome.module.css';

const Sidenav = ({ links, visible }: INavProps) => {
  return (
    <nav
      className={visible ? styles.sideNav : styles.sideNavHidden}
    >
      <ul className={styles.sideNavList}>
        {links.map((link) => (
          <li
            className={styles.sideNavItem}
            key={`nav-link-${link.href}-${link.label}`}
          >
              <Link href={link.href}>
                <span
                  data-test-id={`side-nav-${link.label.toLowerCase()}`}
                  aria-label={link.label}
                  className={styles.sideNavLink}
                >
                  {link.label}
                </span>
              </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidenav;
