import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import InvisiCard from '../components/InvisiCard';
import Button from '../components/Button';
import { getPlaiceholder } from 'plaiceholder';
import { HomePageImageName } from '../types/constants';

export const pageImages = [
  {
    name: HomePageImageName.HEADSHOT,
    src: '/images/home/headshot_cropped_bw.png',
    alt: 'Picture of Travis Cashion',
  },
  {
    name: HomePageImageName.TREKKING,
    src: '/images/home/trekking.jpg',
    alt: 'Person hiking along a mountain',
  },
  {
    name: HomePageImageName.THANK_YOU,
    src: '/images/home/thankyoubackground.jpg',
    alt: 'Background image of a fallen tree',
  },
  {
    name: HomePageImageName.BANNER,
    src: '/images/home/banner_cropped.png',
    alt: 'Background image of a tree and mountains',
  },
];

const HomePage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  imageProps,
}) => {
  return (
    <Layout>
      <div data-testid="home-container">
        <div
          className="flex max-h-840"
          style={{ background: 'linear-gradient(#1a202c, 35%, #e2e8f0)' }}
        >
          <Image
            {...imageProps[HomePageImageName.HEADSHOT]}
            height={840}
            width={760}
            placeholder="blur"
            priority
            data-testid="home-headshot-image"
            className="opacity-75"
          />
          <div className="hidden lg:flex items-center justify-center m-auto">
            <h1 className="mx-5 text-secondary italic opacity-75 text-6xl">
              Welcome
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            {...imageProps[HomePageImageName.BANNER]}
            height={1650}
            placeholder="blur"
            data-testid="banner-image"
          />
          <div className="w-full sm:w-1/2 p-8 flex flex-col absolute">
            <div className="my-auto">
              <InvisiCard>
                <h2>Portfolio</h2>
                <p>
                  I love solving problems with code. Check out my portfolio to
                  see my projects.
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
          className="flex flex-col sm:flex-row py-8 sm:py-0"
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
          <Image
            {...imageProps[HomePageImageName.TREKKING]}
            aria-label="trekking"
            width={775}
            placeholder="blur"
            data-testid="trekking-image"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            {...imageProps[HomePageImageName.THANK_YOU]}
            aria-label="thank you"
            placeholder="blur"
            data-testid="thank-you-image"
          />
          <div className="absolute">
            <InvisiCard>
              <h2 className="my-auto">Thank you for visiting</h2>
            </InvisiCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const imageProps: Partial<Record<HomePageImageName, any>> = {};
  const enrichedImageObjs = await Promise.all(
    pageImages.map(async (imageObj) => {
      return await getPlaiceholder(imageObj.src).then(({ base64, img }) => {
        return { ...imageObj, img, base64 };
      });
    })
  );

  enrichedImageObjs.forEach((enrichedImageObj) => {
    imageProps[enrichedImageObj.name] = {
      ...enrichedImageObj.img,
      blurDataURL: enrichedImageObj.base64,
    };
  });

  return {
    props: {
      imageProps,
    },
  };
};

export default HomePage;
