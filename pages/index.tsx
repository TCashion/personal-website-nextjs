import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPlaiceholder } from 'plaiceholder';
import Layout from '../components/Layout';
import { byNewestFirst, formatDate } from '../lib/helpers';
import { postsData } from '../lib/posts/postsService';
import { projects } from '../lib/projects/projectsData';
import { HomePageImageName } from '../types/constants';
import { IPost, IProject } from '../types/types';
import styles from '../styles/Home.module.css';

export const pageImages = [
  {
    name: HomePageImageName.HEADSHOT,
    src: '/images/home/headshot_cropped_bw.png',
    alt: 'Picture of Travis Cashion',
  },
];

interface HomePageProps {
  imageProps: Partial<Record<HomePageImageName, any>>;
  featuredProjects: IProject[];
  featuredPosts: IPost[];
}

const HomePage = ({
  imageProps,
  featuredProjects,
  featuredPosts,
}: HomePageProps) => {
  return (
    <Layout>
      <div className={styles.page} data-testid="home-container">
        <section className={styles.heroSection}>
          <div className={styles.heroShell}>
            <div className={styles.heroMedia}>
              <div className={styles.imageFrame}>
                <Image
                  {...imageProps[HomePageImageName.HEADSHOT]}
                  placeholder="blur"
                  priority
                  data-testid="home-headshot-image"
                  className={styles.heroImage}
                />
              </div>
            </div>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                Software engineer based in Colorado
              </p>
              <h1 className={styles.heroTitle}>
                I build software and study how systems shape the world.
              </h1>
              <p className={styles.heroBody}>
                I&apos;m Travis Cashion, a software engineer interested in the
                intersection of technology, environmental stewardship &
                conservation.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryAction} href="/projects">
                  View my work
                </Link>
                <Link className={styles.secondaryAction} href="/posts">
                  Read my writing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="positioning-title"
          className={`${styles.fullBleedSection} ${styles.positioningSection}`}
        >
          <div className={styles.positioningInner}>
            <h2 className={styles.srOnly} id="positioning-title">
              Positioning
            </h2>
            <p className={styles.positioningCopy}>
              I&apos;m drawn to work that connects the digital and physical
              worlds, building software, studying ecological systems, and
              spending time outdoors.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="selected-work-title"
          className={styles.contentSection}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Selected Work</p>
            <h2 id="selected-work-title" className={styles.sectionTitle}>
              Projects
            </h2>
            <p className={styles.sectionIntro}>
              I build software with a focus on clarity, systems thinking, and
              real-world application.
            </p>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <article className={styles.projectCard} key={project.slug}>
                <div className={styles.cardMeta}>
                  <p className={styles.cardDate}>{formatDate(project)}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
                <p className={styles.cardBody}>{project.description}</p>
                <ul
                  className={styles.tagList}
                  aria-label={`${project.title} technologies`}
                >
                  {project.tech.slice(0, 3).map((tech) => (
                    <li className={styles.tag} key={`${project.slug}-${tech}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  className={styles.cardLink}
                  href={`/projects/${project.slug}`}
                >
                  View project
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link className={styles.secondaryAction} href="/projects">
              See all projects
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="writing-title"
          className={`${styles.fullBleedSection} ${styles.writingSection}`}
        >
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Writing</p>
            <h2 id="writing-title" className={styles.sectionTitle}>
              Writing
            </h2>
            <p className={styles.sectionIntro}>
              I write to better understand work, human nature, and the natural
              world.
            </p>
          </div>
          <div className={styles.postList}>
            {featuredPosts.map((post) => (
              <article className={styles.postCard} key={post.slug}>
                <div className={styles.postHeader}>
                  <p className={styles.cardDate}>{formatDate(post)}</p>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                </div>
                {post.preview && (
                  <p className={styles.cardBody}>{post.preview}</p>
                )}
                <Link className={styles.cardLink} href={`/posts/${post.slug}`}>
                  Read post
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link className={styles.secondaryAction} href="/posts">
              Browse my blog
            </Link>
          </div>
        </section>

        <section className={styles.footerLead}>
          <div className={styles.footerLeadInner}>
            <h2 className={styles.footerLeadTitle}>Thank you for visiting.</h2>
            <p className={styles.footerLeadCopy}>
              You can find more about my background on the about page, or
              connect with me on LinkedIn below.
            </p>
            <Link className={styles.primaryAction} href="/about">
              More about me
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const imageProps: Partial<Record<HomePageImageName, any>> = {};
  const featuredProjects = [...projects].sort(byNewestFirst).slice(0, 3);
  const featuredPosts = [...postsData].sort(byNewestFirst).slice(0, 3);
  const enrichedImageObjs = await Promise.all(
    pageImages.map(async (imageObj) => {
      const buffer = await fs.readFile(
        path.join(process.cwd(), 'public', imageObj.src),
      );

      return await getPlaiceholder(buffer).then(({ base64, metadata }) => {
        return { ...imageObj, metadata, base64 };
      });
    }),
  );

  enrichedImageObjs.forEach((enrichedImageObj) => {
    imageProps[enrichedImageObj.name] = {
      src: enrichedImageObj.src,
      width: enrichedImageObj.metadata.width,
      height: enrichedImageObj.metadata.height,
      alt: enrichedImageObj.alt,
      blurDataURL: enrichedImageObj.base64,
    };
  });

  return {
    props: {
      imageProps,
      featuredProjects,
      featuredPosts,
    },
  };
};

export default HomePage;
