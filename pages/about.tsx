import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import { getPlaiceholder } from 'plaiceholder';

const About: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  imageProps,
}) => {
  return (
    <Layout>
      <div className="container flex flex-col sm:flex-row">
        <div className="flex items-center">
          <div className="image-cropper rounded-none sm:rounded-full">
            <Image {...imageProps} className="about-img" placeholder="blur" />
          </div>
        </div>
        <div className="mx-5 about-container">
          <h2 className="my-2">About Me</h2>
          <div className="divider"></div>
          <p className="my-2">
            My name is Travis Cashion. I was born and raised in the beautiful
            state of Colorado. I am a father, a family man, a software engineer,
            a writer, and a student of life. I love to investigate and discover;
            solve puzzles; learn new skills; and spend time in nature.
          </p>
          <p>
            <br />
          </p>
          <p>Thanks for visiting my web page! Talk to me about:</p>
          <p>
            <br />
          </p>
          <ul className="list-disc list-inside">
            <li>Web development</li>
            <li>Programming</li>
            <li>Writing</li>
            <li>Business</li>
            <li>Hunting, fishing, wildlife, nature & the outdoors</li>
            <li>Cooking</li>
            <li>Brazilian Jiu-Jitsu</li>
            <li>Travelling</li>
            <li>Dogs</li>
            <li>Spanish</li>
            <li>Or anything else!</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { base64, img } = await getPlaiceholder('/images/about/Headshot.jpg');

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
    },
  };
};

export default About;
