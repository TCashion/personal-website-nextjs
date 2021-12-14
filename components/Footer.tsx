const Footer = () => {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/traviscashion/',
      imgSrc: '/images/social/linkedin.png',
      imgAlt: 'LinkedIn',
    },
    {
      href: 'https://www.instagram.com/travis.cashion/',
      imgSrc: '/images/social/instagram.png',
      imgAlt: 'Instagram',
    },
    {
      href: 'https://medium.com/@cashion.travisg',
      imgSrc: '/images/social/medium.png',
      imgAlt: 'Medium',
    },
    {
      href: 'https://www.facebook.com/travcashion',
      imgSrc: '/images/social/facebook.png',
      imgAlt: 'Facebook',
    },
  ];

  return (
    <footer className="overflow-hidden flex flex-row px-4 py-8 relative w-full bottom-0">
      <div className="w-1/3 hidden sm:block text-center my-auto">
        <h3>Travis G. Cashion</h3>
      </div>
      <div className="w-1/3 hidden sm:flex flex-col text-center">
        &copy; 2020
        <p>Designed & built by Travis Cashion</p>
      </div>
      <div className="w-full sm:w-1/3 flex text-center">
        <div className="flex flex-row m-auto">
          {socialLinks.map((link, idx) => (
            <a
              className="mx-2 my-auto h-8"
              href={link.href}
              key={link.href + idx}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="h-full border-2 border-transparent border-solid rounded-lg"
                src={link.imgSrc}
                alt={link.imgAlt}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
