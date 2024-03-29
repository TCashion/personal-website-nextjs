import Link from 'next/link';
import { IProject } from '../../types/types';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard';
import {
  getAllProjectSlugs,
  getOneProjectData,
} from '../../lib/projectsService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { formatDate } from '../../lib/helpers';
import { PRIVATE } from '../../types/constants';

interface IProps {
  project: IProject;
}

const Project = ({ project }: IProps) => {
  const listStyle = 'list-disc ml-10';

  return (
    <Layout>
      <div className="container p-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/3 project-container">
            <Link href="/projects">
              <span className="my-4">
                <Button innerText="<< Go Back" type="button" />
              </span>
            </Link>
            <h2 className="my-4">{project.title}</h2>
            <h3 className="my-4">{formatDate(project)}</h3>
            <div className="divider"></div>
            <p className="my-4">{project.description}</p>
            {project.subDescription ? (
              <ul className="my-4">
                {project.subDescription.map((bullet) => (
                  <li className={listStyle} key={bullet.substring(0, 20)}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            <h3 className="my-4">Tech used:</h3>
            <ul className="content-ul">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {project.APIs ? (
              <>
                <h3 className="my-4">APIs implemented:</h3>
                <ul className="content-ul">
                  {project.APIs.map((API) => (
                    <li key={API}>{API}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {project.collaborators ? (
              <>
                <h3 className="my-4">Collaborators:</h3>
                <ul className="content-ul">
                  {project.collaborators.map((collaborator) => (
                    <li key={collaborator.name}>
                      <a
                        className="underline text-jade-default"
                        href={collaborator.portfolioUrl}
                        rel="noreferrer noopener"
                      >
                        {collaborator.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <div className="my-4">
              <a
                className="mr-2"
                href={
                  project.githubUrl !== PRIVATE ? project.githubUrl : undefined
                }
                rel="noreferrer noopener"
                target="_blank"
              >
                <Button
                  innerText={
                    project.githubUrl === PRIVATE
                      ? 'GitHub (private)'
                      : 'GitHub'
                  }
                  type="button"
                  disabled={project.githubUrl === PRIVATE}
                />
              </a>
              {project.liveAppUrl && (
                <a
                  className="mr-2"
                  href={project.liveAppUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Button innerText="Live App" type="button" />
                </a>
              )}
            </div>
          </div>
          <div className="w-full sm:w-1/3 my-auto">
            <ImageCard imageUrl={project.previewImgSrc} />
          </div>
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
