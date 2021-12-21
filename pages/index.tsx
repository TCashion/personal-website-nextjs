import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import InvisiCard from '../components/InvisiCard';
import Button from '../components/Button';
import BannerImage from '../public/images/home/banner_cropped.png';
import TrekkingImage from '../public/images/home/trekking.jpg';
import ThankYouBackgroundImage from '../public/images/home/thankyoubackground.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <Image src={BannerImage} height={1650} priority />
        <div className="w-full sm:w-1/2 p-8 flex flex-col absolute">
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
                I love to write about things that excite me, adventures
                I&apos;ve had, and some of my most poignant memories. In my
                blog, I share thoughts and stories that are meaningful to me.
              </p>
              <Link href="/posts">
                <a>
                  <Button innerText="Blog" type="button" />
                </a>
              </Link>
            </Card>
          </div>
        </div>
        <Image src={TrekkingImage} aria-label="trekking" width={700} />
      </div>
      <div className="flex justify-center items-center">
        <Image src={ThankYouBackgroundImage} aria-label="thank you" />
        <div className="absolute">
          <InvisiCard>
            <h2 className="my-auto">Thank you for visiting</h2>
          </InvisiCard>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
