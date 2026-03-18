import { describe, expect, it } from '@jest/globals';
import { render, screen, within } from '../test-utils';
import HomePage, { pageImages } from '../../pages';

const imageProps = Object.fromEntries(
  pageImages.map((image) => [
    image.name,
    {
      src: image.src,
      alt: image.alt,
      width: 3024,
      height: 1816,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNInr7t4P//W17+d3Q3YWBgYijICtm2blZOpgEAsWwL+7IvmWAAAAAASUVORK5CYII=',
    },
  ])
);

describe('HomePage', () => {
  it('renders the hero, content sections, and site navigation', () => {
    render(<HomePage imageProps={imageProps} />);

    expect(screen.getByRole('heading', { level: 1, name: /welcome/i })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Portfolio' })).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeTruthy();
    expect(
      screen.getByRole('heading', { level: 2, name: /thank you for visiting/i })
    ).toBeTruthy();

    const nav = screen.getByTestId('header-nav');
    ['Home', 'Portfolio', 'Blog', 'About'].forEach((label) => {
      expect(within(nav).getByRole('link', { name: label })).toBeTruthy();
    });
  });

  it('provides stable portfolio and blog calls to action', () => {
    render(<HomePage imageProps={imageProps} />);

    const portfolioLink = screen.getByRole('button', { name: 'Portfolio' }).closest('a');
    const blogLink = screen.getByRole('button', { name: 'Blog' }).closest('a');

    expect(portfolioLink).not.toBeNull();
    expect(portfolioLink?.getAttribute('href')).toBe('/projects');
    expect(blogLink).not.toBeNull();
    expect(blogLink?.getAttribute('href')).toBe('/posts');
  });

  it('renders all homepage images with meaningful alt text', () => {
    render(<HomePage imageProps={imageProps} />);

    pageImages.forEach((image) => {
      expect(screen.getByAltText(image.alt)).toBeTruthy();
    });
  });

  it('renders footer attribution and social links', () => {
    render(<HomePage imageProps={imageProps} />);

    const footer = screen.getByTestId('footer');

    expect(within(footer).getByText(/designed & built by travis cashion/i)).toBeTruthy();
    expect(within(footer).getByText(/travis g\. cashion/i)).toBeTruthy();

    const socialLinks = [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/traviscashion/',
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/travis.cashion/',
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/travcashion',
      },
    ];

    socialLinks.forEach(({ name, href }) => {
      expect(within(footer).getByRole('link', { name }).getAttribute('href')).toBe(href);
    });
  });
});
