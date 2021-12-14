import { IProject } from '../types/types';
import { projects } from './projects/projectsData';

// export const projects: IProject[] = [
//     {
//         slug: 'day-tracker',
//         title: 'Day Tracker',
//         date: new Date(1580285311842), // January
//         description: 'Day Tracker is a free time-logging tool that tracks and displays how the user spends his or her time throughout a given day. This web-based app was my showcase project for my FEWD course taken through General Assembly.',
//         tech: ['HTML', 'CSS', 'Google Firebase (Firestore)', 'jQuery', 'Moment.js', 'Chart.js', 'Parsley.js'],
//         githubUrl: 'https://github.com/TCashion/TCashion.github.io',
//         liveAppUrl: 'https://tcashion.github.io/',
//         previewImgSrc: '/images/portfolio/previews/daytracker.png'
//     },
//     {
//         slug: 'battleship',
//         title: 'Battleship',
//         date: new Date(1590810545989), // May
//         description: 'This version of Battleship is a web-based app based on the popular children\'s board game. Play against your computer to try to find and sink its ships, before it sinks all of yours!',
//         tech: ['HTML', 'CSS', 'JavaScript'],
//         githubUrl: 'https://github.com/TCashion/battleship',
//         liveAppUrl: 'https://tcashion.github.io/battleship/',
//         previewImgSrc: '/images/portfolio/previews/battleship.png'
//     },
//     {
//         slug: 'outdoor-journal',
//         title: 'Outdoor Journal',
//         date: new Date(1590810545989), // May
//         description: 'The Outdoor Journal is a MEN stack app that helps you plan, record, and save memories of your favorite outdoor adventures. This project was born out of my own personal experience as an avid outdoorsman and journal keeper.',
//         tech: ['HTML', 'CSS (Bootstrap)', 'JavaScript', 'MongoDB / Mongoose', 'Express.JS', 'Node.js'],
//         APIs: ['Google Maps Javascript API', 'Natureserve.org public data API'],
//         githubUrl: 'https://github.com/TCashion/outdoor-journal',
//         liveAppUrl: 'https://outdoor-journal.herokuapp.com/',
//         previewImgSrc: '/images/portfolio/previews/outdoor-journal.png'
//     },
//     {
//         slug: 'finch-finder',
//         title: 'Finch Finder',
//         date: new Date(1593438545989), // June
//         description: 'For years, I\'ve been a casual birder. There are tons of great apps out there for looking up and tracking birds, but I wanted to make one that fit my specific needs. Enjoy!',
//         tech: ['HTML', 'CSS (Materialize)', 'Python', 'Django', 'AWS (S3)', 'PostgreSQL', 'JavaScript'],
//         githubUrl: 'https://github.com/TCashion/finch-finder',
//         liveAppUrl: 'https://finch-finder.herokuapp.com/',
//         previewImgSrc: '/images/portfolio/previews/finch-finder.png'
//     },
//     {
//         slug: 'gas-app',
//         title: 'GASapp',
//         date: new Date(1593438545989), // June
//         description: 'Music enthusiasts often suffer from something called GAS - “Gear Acquisition Syndrome." The GASapp is a place where you can store and evaluate all of your music gear in one, easy to access list. The app includes valuations on each piece of gear you own, or a price listing on your wish-list items (thanks to the Reverb.com API).',
//         collaborators: [
//             {
//                 name: 'Kimberly Lord',
//                 portfolioUrl: 'https://github.com/kimberlyalord'
//             },
//             {
//                 name: 'Chris Violante',
//                 portfolioUrl: 'https://github.com/Chris-Violante'
//             },
//         ],
//         tech: ['HTML', 'CSS (Materialize)', 'Python', 'Django', 'AWS (S3)', 'PostgreSQL', 'JavaScript'],
//         APIs: ['Reverb.com API'],
//         githubUrl: 'https://github.com/TCashion/GASapp',
//         liveAppUrl: 'https://gear-acquisition-syndrome.herokuapp.com/',
//         previewImgSrc: '/images/portfolio/previews/gas-app.png'
//     },
//     {
//         slug: 'obnoxious',
//         title: 'obNoxious',
//         date: new Date(1596066545989), // July
//         description: 'Invasive species are an issue worldwide, but this app focuses on those species invading North America, specifically the United States. The obNoxious app servers two purposes:',
//         subDescription: [
//             'To provide an API resource available to the public that contains identifying information about noxious plant species.',
//             'To provide an interface for authenticated users to report sightings of noxious species, thereby building a user-supported database that maps the distribution of some of North America\'s most tenacious invaders.'
//         ],
//         tech: ['HTML', 'CSS (Materialize)', 'MongoDB', 'Express.JS', 'React', 'Node.JS', 'TypeScript'],
//         APIs: ['MapBox GL API', 'Natureserve.org public data API'],
//         githubUrl: 'https://github.com/TCashion/GASapp',
//         liveAppUrl: 'https://gear-acquisition-syndrome.herokuapp.com/',
//         previewImgSrc: '/images/portfolio/previews/obnoxious.png'
//     },
//     {
//         slug: 'traviscashiondotcom',
//         title: 'TravisCashion.com (v2.0)',
//         date: new Date(1603952408032), // October
//         description: 'This is the second iteration of my personal portfolio site, which I rebuilt using the skills I\'ve obtain over the last year. This site is built on NextJS, which is a framework that runs on React but serves the client with server-side rendered (SSR) pages. This makes for a fast, highly responsive website.',
//         tech: ['HTML', 'CSS (TailwindCSS)', 'Firebase (Hosting & Firestore)', 'NextJS (React)', 'TypeScript', 'Node.JS', 'Appolo', 'GraphQL'],
//         githubUrl: '',
//         liveAppUrl: 'https://traviscashion.com/',
//         previewImgSrc: '/images/portfolio/previews/banner.png'
//     }
// ];

export const getAllProjects = (): IProject[] => {
  return projects
    .sort((a, b) => {
      if (a.timeStamp < b.timeStamp) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((project) => ({
      ...project,
      date: formatProjectDate(project),
    }));
};

export const getAllProjectSlugs = (): string[] => {
  const projectSlugs = projects.map((project) => project.slug);
  return projectSlugs;
};

export const getOneProjectData = (slug: string): IProject | undefined => {
  const project = projects.find((project) => project.slug === slug);
  return project;
};

export const formatProjectDate = (project: IProject): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date: Date = new Date(project.timeStamp);
  const month: string = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month}, ${year}`;
};
