import { render } from '../test-utils';
// import { render } from '@testing-library/react'
import HomePage from '../../pages';
import { HomePageImageName } from '../../types/constants';


describe('HomePage', () => {
  it('renders', () => {
    const imageProps = { // are these needed?
      [HomePageImageName.BANNER]: {
        src: '/images/home/trekking.jpg'
      },
      [HomePageImageName.THANK_YOU]: {
        src: '/images/home/trekking.jpg'
      },
      [HomePageImageName.TREKKING]: {
        src: '/images/home/trekking.jpg'
      }
    }

    render(<HomePage {...imageProps} />);
  });
});
