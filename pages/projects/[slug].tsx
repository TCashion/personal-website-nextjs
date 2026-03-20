import Link from 'next/link';
import { IProject } from '../../types/types';
import Layout from '../../components/Layout';
import {
  getAllProjectSlugs,
  getOneProjectData,
} from '../../lib/projectsService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { formatDate } from '../../lib/helpers';
import { PRIVATE } from '../../types/constants';
import styles from '../../styles/DetailPages.module.css';

interface IProps {
  project: IProject;
}

const Project = ({ project }: IProps) => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.backNav}>
          <Link className={styles.backLink} href="/projects">
            <button className={styles.backButton} type="button">
              {'<< Go Back'}
            </button>
          </Link>
        </div>
        <div className={styles.projectShell}>
          <article className={styles.projectMain}>
            <p className={styles.projectMeta}>{formatDate(project)}</p>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <div className={styles.divider}></div>
            <p className={styles.projectDescription}>{project.description}</p>
            {project.subDescription ? (
              <ul className={styles.subDescription}>
                {project.subDescription.map((bullet) => (
                  <li key={bullet.substring(0, 20)}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            <section className={styles.detailSection}>
              <h3 className={styles.sectionHeading}>Tech used:</h3>
              <ul className={styles.sectionList}>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
            {project.APIs ? (
              <section className={styles.detailSection}>
                <h3 className={styles.sectionHeading}>APIs implemented:</h3>
                <ul className={styles.sectionList}>
                  {project.APIs.map((API) => (
                    <li key={API}>{API}</li>
                  ))}
                </ul>
              </section>
            ) : null}
            {project.collaborators ? (
              <section className={styles.detailSection}>
                <h3 className={styles.sectionHeading}>Collaborators:</h3>
                <ul className={styles.sectionList}>
                  {project.collaborators.map((collaborator) => (
                    <li key={collaborator.name}>
                      <a
                        href={collaborator.portfolioUrl}
                        rel="noreferrer noopener"
                      >
                        {collaborator.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            <div className={styles.actions}>
              {project.githubUrl !== PRIVATE ? (
                <a
                  href={project.githubUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <button className={styles.actionButton} type="button">
                    GitHub
                  </button>
                </a>
              ) : (
                <button
                  className={styles.actionButton}
                  type="button"
                  disabled
                >
                  GitHub (private)
                </button>
              )}
              {project.liveAppUrl && (
                <a
                  href={project.liveAppUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <button className={styles.actionButton} type="button">
                    Live App
                  </button>
                </a>
              )}
            </div>
          </article>
          <aside className={styles.projectSidebar}>
            <img
              className={styles.projectImage}
              src={project.previewImgSrc}
              alt={`${project.title} preview`}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllProjectSlugs();
  const paths: string[] = slugs.map((slug: string) => `/projects/${slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params && params.slug;
  const project = getOneProjectData(slug as string);
  return {
    props: {
      project,
    },
  };
};

export default Project;
