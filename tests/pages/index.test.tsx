import { getByText, render, screen } from '../test-utils';
import HomePage, { pageImages } from '../../pages';

// Create dummy image props to pass to HomePage component
const imageProps: any = {};
pageImages.forEach((image) => {
  imageProps[image.name] = {
    src: image.src,
    width: 3024,
    height: 1816,
    type: 'png',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNInr7t4P//W17+d3Q3YWBgYijICtm2blZOpgEAsWwL+7IvmWAAAAAASUVORK5CYII=',
  };
});

describe('HomePage', () => {
  it('renders', () => {
    render(<HomePage imageProps={imageProps} />);

    expect(screen.getByTestId('home-container')).toBeDefined();
  });

  it('shows the expected text', () => {
    render(<HomePage imageProps={imageProps} />);

    [
      'I love solving problems with code. Check out my portfolio to see my projects.',
      "I love to write about things that excite me, adventures I've had, and some of my most poignant memories. In my blog, I share thoughts and stories that are meaningful to me.",
      'Thank you for visiting',
    ].forEach((text) => {
      expect(screen.getByText(text)).toBeDefined();
    });
  });

  it('renders the images', () => {
    render(<HomePage imageProps={imageProps} />);

    ['banner-image', 'trekking-image', 'thank-you-image'].forEach(
      (imageTestId) => {
        expect(screen.getByTestId(imageTestId)).toBeDefined();
      }
    );
  });

  describe('nav header', () => {
    it('renders the nav header', () => {
      render(<HomePage imageProps={imageProps} />);

      const navHeaderEl = screen.getByTestId('header-nav');
      expect(navHeaderEl).toBeDefined();
    });

    it('renders the links with expected text', () => {
      render(<HomePage imageProps={imageProps} />);

      const navHeaderEl = screen.getByTestId('header-nav');

      ['Home', 'Portfolio', 'Blog', 'About'].forEach((navLinkText) => {
        expect(getByText(navHeaderEl, navLinkText)).toBeDefined();
      });
    });
  });

  describe('footer', () => {
    it('renders the footer', () => {
      render(<HomePage imageProps={imageProps} />);

      const footerEl = screen.getByTestId('footer');
      expect(footerEl).toBeDefined();
    });

    it('renders the expected text', () => {
      render(<HomePage imageProps={imageProps} />);

      const footerEl = screen.getByTestId('footer');

      ['Designed & built by Travis Cashion', 'Travis G. Cashion'].forEach(
        (footerText) => {
          expect(getByText(footerEl, footerText)).toBeDefined();
        }
      );
    });

    it('renders the social links', () => {
      render(<HomePage imageProps={imageProps} />);

      expect(screen.getByTestId('social-links-container')).toBeDefined();
    });
  });
});
