import Image from 'next/image';
import linkedInImg from '../public/images/social/linkedin.png';
import facebookImg from '../public/images/social/facebook.png';
import instagramImg from '../public/images/social/instagram.png';
import styles from '../styles/Chrome.module.css';
const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/traviscashion/',
    imgSrc: '/images/social/linkedin.png',
    imgAlt: 'LinkedIn',
    imageFile: linkedInImg,
  },
  {
    href: 'https://www.instagram.com/travis.cashion/',
    imgSrc: '/images/social/instagram.png',
    imgAlt: 'Instagram',
    imageFile: instagramImg,
  },
  {
    href: 'https://www.facebook.com/travcashion',
    imgSrc: '/images/social/facebook.png',
    imgAlt: 'Facebook',
    imageFile: facebookImg,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.footerInner}>
        <div>
          <h3 className={styles.footerName}>Travis G. Cashion</h3>
        </div>
        <div />
        <div
          className={styles.socialLinks}
          data-testid="social-links-container"
        >
          {socialLinks.map((link, idx) => (
            <a
              className={styles.socialLink}
              href={link.href}
              key={link.href + idx}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={link.imageFile}
                alt={link.imgAlt}
                height={28}
                width={28}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
