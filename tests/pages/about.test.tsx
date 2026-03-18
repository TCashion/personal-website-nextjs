import { describe, expect, it } from '@jest/globals';
import { render, screen } from '../test-utils';
import About from '../../pages/about';

const imageProps = {
  src: '/images/about/Headshot.jpg',
  width: 1200,
  height: 1200,
  blurDataURL: 'data:image/png;base64,about',
};

describe('About page', () => {
  it('renders the page heading, profile image, and interests list', () => {
    render(<About imageProps={imageProps} />);

    expect(screen.getByRole('heading', { level: 2, name: /about me/i })).toBeTruthy();
    expect(screen.getByAltText(/picture of travis cashion/i)).toBeTruthy();
    expect(screen.getByText(/talk to me about:/i)).toBeTruthy();
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0);
  });
});
