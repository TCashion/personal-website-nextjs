import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import fs from 'node:fs/promises';
import path from 'node:path';
import Layout from '../components/Layout';
import { getPlaiceholder } from 'plaiceholder';
import styles from '../styles/ContentPages.module.css';

const About: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  imageProps,
}) => {
  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Profile</p>
          <h2 className={styles.pageTitle}>About Me</h2>
        </header>
        <div className={styles.aboutShell}>
          <div className={styles.aboutMedia}>
            <div className={styles.aboutImageFrame}>
              <Image
                {...imageProps}
                alt="Picture of Travis Cashion"
                className={styles.aboutImage}
                placeholder="blur"
              />
            </div>
          </div>
          <div className={styles.aboutContent}>
            <p>
              My name is Travis Cashion. I was born and raised in the beautiful
              state of Colorado. I am a father, a family man, a software
              engineer, a writer, and a student of life. I love to investigate
              and discover; solve puzzles; learn new skills; and spend time in
              nature.
            </p>
            <p>Thanks for visiting my web page! Talk to me about:</p>
            <ul className={styles.aboutList}>
              <li>Web development</li>
              <li>Programming</li>
              <li>Writing</li>
              <li>Parenting</li>
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
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const src = '/images/about/Headshot.jpg';
  const buffer = await fs.readFile(path.join(process.cwd(), 'public', src));
  const { base64, metadata } = await getPlaiceholder(buffer);

  return {
    props: {
      imageProps: {
        src,
        width: metadata.width,
        height: metadata.height,
        blurDataURL: base64,
      },
    },
  };
};

export default About;
