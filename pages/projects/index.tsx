import Link from 'next/link';
import Layout from '../../components/Layout';
import { byNewestFirst, formatDate } from '../../lib/helpers';
import { IProject } from '../../types/types';
import { GetStaticProps } from 'next';
import { projects } from '../../lib/projects/projectsData';
import styles from '../../styles/ContentPages.module.css';

interface IProps {
  projects: IProject[];
}

const ProjectsHome = ({ projects }: IProps) => {
  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Selected Work</p>
          <h2 className={styles.pageTitle}>Projects</h2>
        </header>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Link
              className={styles.projectLink}
              key={`${project.title}-link`}
              href={'/projects/[slug]'}
              as={`/projects/${project.slug}`}
              passHref
            >
              <article className={styles.projectCard}>
                <div className={styles.projectImageWrap}>
                  <img
                    className={styles.projectImage}
                    src={project.previewImgSrc}
                    alt={`${project.title} preview`}
                  />
                </div>
                <div className={styles.projectBody}>
                  <p className={styles.projectMeta}>{formatDate(project)}</p>
                  <h3 className={styles.projectHeading}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  {project.subDescription ? (
                    <ul className={styles.projectSubDescription}>
                      {project.subDescription.map((bullet) => (
                        <li key={bullet.substring(0, 20)}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  projects.sort(byNewestFirst);
  return {
    props: {
      projects,
    },
  };
};

export default ProjectsHome;
