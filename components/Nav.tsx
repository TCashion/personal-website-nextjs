import Link from 'next/link';
import { INavProps } from '../types/types';
import styles from '../styles/Chrome.module.css';

const Nav = ({ links }: INavProps) => {
  return (
    <nav className={styles.nav} data-testid="header-nav">
      <ul className={styles.navList}>
        {links.map((link) => (
          <li className={styles.navItem} key={`nav-link-${link.href}-${link.label}`}>
            <Link href={link.href}>
              <span
                className={styles.navLink}
                data-test-id={`main-nav-${link.label.toLowerCase()}`}
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

export default Nav;
