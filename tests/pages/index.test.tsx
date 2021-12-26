import { render, screen } from '../test-utils';
import HomePage from '../../pages';
import { HomePageImageName } from '../../types/constants';

const imageProps = {
  [HomePageImageName.BANNER]: {
    src: '/images/home/banner_cropped.png',
    width: 3024,
    height: 1816,
    type: 'png',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNInr7t4P//W17+d3Q3YWBgYijICtm2blZOpgEAsWwL+7IvmWAAAAAASUVORK5CYII=',
  },
  [HomePageImageName.THANK_YOU]: {
    src: '/images/home/thank-you.jpg',
    width: 3024,
    height: 1816,
    type: 'png',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNInr7t4P//W17+d3Q3YWBgYijICtm2blZOpgEAsWwL+7IvmWAAAAAASUVORK5CYII=',
  },
  [HomePageImageName.TREKKING]: {
    src: '/images/home/trekking.jpg',
    width: 3024,
    height: 1816,
    type: 'png',
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNInr7t4P//W17+d3Q3YWBgYijICtm2blZOpgEAsWwL+7IvmWAAAAAASUVORK5CYII=',
  },
};

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
});
