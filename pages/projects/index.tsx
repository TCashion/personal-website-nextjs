import Link from 'next/link';
import Layout from '../../components/Layout';
import CardWithImage from '../../components/CardWithImage';
import Button from '../../components/Button';
import { byNewestFirst, byOldestFirst, formatDate } from '../../lib/helpers';
import { IProject } from '../../types/types';
import { GetStaticProps } from 'next';
import { projects } from '../../lib/projects/projectsData';

interface IProps {
  projects: IProject[];
}

const ProjectsHome = ({ projects }: IProps) => {
  return (
    <Layout>
      <div className="flex flex-col flex-wrap content-center px-2">
        {projects.map((project) => (
          <CardWithImage
            extraClasses="shadow-light m-2"
            imageUrl={project.previewImgSrc}
            key={project.title}
            title={project.title}
            subtitle={formatDate(project)}
          >
            <p className="mr-8">{project.description}</p>
            {project.subDescription ? (
              <ul className="content-ul">
                {project.subDescription.map((bullet) => (
                  <li key={bullet.substring(0, 20)}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            <Link href={'/projects/[slug]'} as={`/projects/${project.slug}`}>
              <a>
                <Button innerText="See more" type="button" />
              </a>
            </Link>
          </CardWithImage>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  projects.sort(byNewestFirst)
  return {
    props: {
      projects
    },
  };
};

export default ProjectsHome;
