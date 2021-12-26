import Image from 'next/image';
import linkedInImg from '../public/images/social/linkedin.png';
import facebookImg from '../public/images/social/facebook.png';
import instagramImg from '../public/images/social/instagram.png';
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
    <footer className="overflow-hidden flex flex-row px-4 py-8 relative w-full bottom-0" data-testid="footer">
      <div className="w-1/3 hidden sm:block text-center my-auto">
        <h3>Travis G. Cashion</h3>
      </div>
      <div className="w-1/3 hidden sm:flex flex-col text-center">
        <p>Designed & built by Travis Cashion</p>
      </div>
      <div className="w-full sm:w-1/3 flex text-center">
        <div className="flex flex-row m-auto" data-testid="social-links-container">
          {socialLinks.map((link, idx) => (
            <a
              className="mx-2 my-auto h-8"
              href={link.href}
              key={link.href + idx}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={link.imageFile}
                alt={link.imgAlt}
                height={50}
                width={50}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
