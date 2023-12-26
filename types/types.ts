import { MouseEventHandler, ReactNode } from 'react';

export interface INavLink {
  label: string;
  href: string;
}

export interface INavProps {
  links: INavLink[];
  visible?: boolean;
}

export interface IChildrenProps {
  children?: ReactNode;
  extraClasses?: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export interface ICardWithImageProps extends IChildrenProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}


export interface IBlogLinkProps extends IChildrenProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}

export interface ICollaborator {
  name: string;
  portfolioUrl: string;
}

export interface IProject {
  slug: string;
  title: string;
  timeStamp: number;
  description: string;
  subDescription?: string[];
  tech: string[];
  APIs?: string[];
  collaborators?: ICollaborator[];
  githubUrl: string;
  liveAppUrl?: string;
  previewImgSrc: string;
}

export interface IAddProjectParams {
  project: IProject;
}

export interface ISlugs {
  slug: string;
}

export interface IAddPostParams {
  post: {
    slug: string;
    title: string;
    date: string;
    content: string;
    previewImgSrc: string;
  };
}

export interface IPost {
  slug: string;
  title: string;
  timeStamp: number;
  preview?: string;
  previewImgSrc?: string;
  componentName: string;
}
