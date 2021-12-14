import Link from 'next/link';
import { initApolloClient } from '../../lib/apollo';
import { IProject, ISlugs } from '../../@types/interfaces';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ImageCard from '../../components/ImageCard';
import {
  PROJECT_DATA,
  PROJECT_SLUGS,
} from '../../lib/projects/projectsService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { formatDate } from '../../lib/helpers';

interface IProps {
  project: IProject;
}

const Project = ({ project }: IProps) => {
  const listStyle = 'list-disc ml-10';

  return (
    <Layout>
      <div className="container p-8">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-2/3">
            <Link href="/projects">
              <a className="my-4">
                <Button innerText="<< Go Back" type="button" />
              </a>
            </Link>
            <h2 className="my-4">{project.title}</h2>
            <h3 className="my-4">{project.date}</h3>
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
                href={project.githubUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                <Button innerText="GitHub" type="button" />
              </a>
              <a
                className="mr-2"
                href={project.liveAppUrl ? project.liveAppUrl : '#'}
                rel="noreferrer noopener"
                target="_blank"
              >
                <Button
                  innerText="Live App"
                  type="button"
                  disabled={!project.liveAppUrl}
                />
              </a>
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
  const apolloClient = initApolloClient();
  const slugsData = await apolloClient.query({
    query: PROJECT_SLUGS,
  });
  const slugs = slugsData.data.allProjects;
  const paths: string[] = slugs.map(
    (projectSlug: ISlugs) => `/projects/${projectSlug.slug}`
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params && params.slug ? params.slug : '';
    const apolloClient = initApolloClient();
    const projectData = await apolloClient.query({
      query: PROJECT_DATA,
      variables: {
        projectSlug: slug,
      },
    });
    const project: IProject = { ...projectData.data.oneProject };
    project.date = formatDate(project);
    return {
      props: {
        project,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default Project;
