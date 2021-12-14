import type { NextPage } from 'next'
import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import InvisiCard from '../components/InvisiCard';
import Button from '../components/Button';

const images = [
  '/images/home/banner_cropped.png',
  '/images/home/trekking.jpg',
  '/images/home/thankyoubackground.jpg',
];

const imageStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Home: NextPage = () => {
  return (
    <Layout>
      <div
        style={{
          background: `url(${images[0]})`,
          height: '650px',
          backgroundPositionY: 'bottom 85%',
          ...imageStyle,
        }}
      >
        <div className="w-full sm:w-1/2 h-full p-8 flex flex-col">
          <div className="my-auto">
            <InvisiCard>
              <h2>Portfolio</h2>
              <p>
                I love solving problems with code. Check out my portfolio to see
                my projects.
              </p>
              <Link href="/projects">
                <a>
                  <Button innerText="Portfolio" type="button" />
                </a>
              </Link>
            </InvisiCard>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col sm:flex-row py-8"
        style={{ height: '675px' }}
      >
        <div className="w-full sm:1/2 h-full p-8 flex flex-col">
          <div className="my-auto">
            <Card extraClasses="shadow-light">
              <h2>Blog</h2>
              <p>
                I love to write about things that excite me, adventures I've
                had, and some of my most poignant memories. In my blog, I share
                thoughts and stories that are meaningful to me.
              </p>
              <Link href="/posts">
                <a>
                  <Button innerText="Blog" type="button" />
                </a>
              </Link>
            </Card>
          </div>
        </div>
        <div
          className="w-full sm:1/2 p-8 h-full"
          style={{
            background: `url(${images[1]})`,
            ...imageStyle,
            backgroundBlendMode: 'lighten',
          }}
        >
          <span role="img" aria-label="trekking"></span>
        </div>
      </div>
      <div
        className="flex justify-center"
        style={{
          background: `url(${images[2]})`,
          height: '275px',
          ...imageStyle,
        }}
      >
        <InvisiCard>
          <h2 className="my-auto">Thank you for visiting</h2>
        </InvisiCard>
      </div>
    </Layout>
  );
}

export default Home
