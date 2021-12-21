import { PRIVATE } from '../../types/constants';
import { IProject } from '../../types/types';

export const collaborators = [
  {
    name: 'Kimberly Lord',
    portfolioUrl: 'https://github.com/kimberlyalord',
  },
  {
    name: 'Chris Violante',
    portfolioUrl: 'https://github.com/Chris-Violante',
  },
];

export const projects: IProject[] = [
  {
    slug: 'day-tracker',
    title: 'Day Tracker',
    timeStamp: 1580285311842, // January
    description:
      'Day Tracker is a free time-logging tool that tracks and displays how the user spends his or her time throughout a given day. This web-based app was my showcase project for my FEWD course taken through General Assembly.',
    tech: [
      'HTML',
      'CSS',
      'Google Firebase (Firestore)',
      'jQuery',
      'Moment.js',
      'Chart.js',
      'Parsley.js',
    ],
    githubUrl: 'https://github.com/TCashion/TCashion.github.io',
    liveAppUrl: 'https://tcashion.github.io/',
    previewImgSrc: '/images/portfolio/previews/daytracker.png',
  },
  {
    slug: 'battleship',
    title: 'Battleship',
    timeStamp: 1590810545989, // May
    description:
      "This version of Battleship is based on the popular children's board game. Play against the computer to locate and sink its ships, before it sinks all of yours!",
    tech: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/TCashion/battleship',
    liveAppUrl: 'https://tcashion.github.io/battleship/',
    previewImgSrc: '/images/portfolio/previews/battleship.png',
  },
  {
    slug: 'outdoor-journal',
    title: 'Outdoor Journal',
    timeStamp: 1590810545989, // May
    description:
      'The Outdoor Journal is a MEN stack app that helps you plan, record, and save memories of your favorite outdoor adventures. This project was born out of my own personal experience as an avid outdoorsman and journal keeper.',
    tech: [
      'HTML',
      'CSS (Bootstrap)',
      'JavaScript',
      'MongoDB / Mongoose',
      'Express.JS',
      'Node.js',
    ],
    APIs: ['Google Maps Javascript API', 'Natureserve.org public data API'],
    githubUrl: 'https://github.com/TCashion/outdoor-journal',
    liveAppUrl: 'https://outdoor-journal.herokuapp.com/',
    previewImgSrc: '/images/portfolio/previews/outdoor-journal.png',
  },
  {
    slug: 'finch-finder',
    title: 'Finch Finder',
    timeStamp: 1593438545989, // June
    description:
      "For years, I've been a casual birder. There are tons of great apps out there for looking up and tracking birds, but I wanted to make one that fit my specific needs. Enjoy!",
    tech: [
      'HTML',
      'CSS (Materialize)',
      'Python',
      'Django',
      'AWS (S3)',
      'PostgreSQL',
      'JavaScript',
    ],
    githubUrl: 'https://github.com/TCashion/finch-finder',
    liveAppUrl: 'https://finch-finder.herokuapp.com/',
    previewImgSrc: '/images/portfolio/previews/finch-finder.png',
  },
  {
    slug: 'gas-app',
    title: 'GASapp',
    timeStamp: 1593438545989, // June
    description:
      'Music enthusiasts often suffer from something called GAS - "Gear Acquisition Syndrome." The GASapp is a place where you can store and evaluate all of your music gear in one easy to access list. The app includes valuations on each piece of gear you own, or a price listing on your wish-list items (thanks to the Reverb.com API).',
    collaborators: [collaborators[0], collaborators[1]],
    tech: [
      'HTML',
      'CSS (Materialize)',
      'Python',
      'Django',
      'AWS (S3)',
      'PostgreSQL',
      'JavaScript',
    ],
    APIs: ['Reverb.com API'],
    githubUrl: 'https://github.com/TCashion/GASapp',
    liveAppUrl: 'https://gear-acquisition-syndrome.herokuapp.com/',
    previewImgSrc: '/images/portfolio/previews/gas-app.png',
  },
  {
    slug: 'obnoxious',
    title: 'obNoxious',
    timeStamp: 1596066545989, // July
    description:
      'Invasive species are an issue worldwide, but this app focuses on those species invading North America, specifically the United States. The obNoxious app servers two purposes:',
    subDescription: [
      'To provide an API resource available to the public that contains identifying information about noxious plant species.',
      "To provide an interface for authenticated users to report sightings of noxious species, thereby building a user-supported database that maps the distribution of some of North America's most tenacious invaders.",
    ],
    tech: [
      'HTML',
      'CSS (Materialize)',
      'MongoDB',
      'Express.JS',
      'React',
      'Node.JS',
      'TypeScript',
    ],
    APIs: ['MapBox GL API', 'Natureserve.org public data API'],
    githubUrl: 'https://github.com/TCashion/GASapp',
    liveAppUrl: 'https://obnoxious.herokuapp.com/',
    previewImgSrc: '/images/portfolio/previews/obnoxious.png',
  },
  {
    slug: 'traviscashiondotcom',
    title: 'TravisCashion.com (v2.0)',
    timeStamp: 1639754698396, // December 2021
    description:
      'This is the second iteration of my personal portfolio site. This site runs on NextJS, which is a React-based framework that serves fast, highly performant React sites.',
    tech: [
      'HTML',
      'CSS (TailwindCSS)',
      'NextJS (React)',
      'TypeScript',
      'Node.JS',
    ],
    githubUrl: 'https://github.com/TCashion/personal-website-nextjs',
    liveAppUrl: 'https://traviscashion.com/',
    previewImgSrc: '/images/portfolio/previews/tree.png',
  },
  {
    slug: 'stopanalyzing',
    title: 'Stop Analyzing Embed (open source)',
    timeStamp: 1597471200000, // August
    description:
      'Stop Analyzing Embed is a beginner-friendly, open source project created and maintained by Banco Do Brasil. Think of it like a Tinder app for products: the user compares two products presented on cards, and chooses the one that they like most. I contributed to this project in two ways. First, I re-wrote the documentation to correct typos and make the information more accessible to beginner developers. Then, I created a button component, complete with Jest units tests, that triggers and animation to slide the cards off of the screen (in the event that the user does not like either option presented).',
    tech: [
      'HTML',
      'CSS (TailwindCSS)',
      'Docker',
      'React',
      'TypeScript',
      'Jest (unit testing)',
      'Node.JS',
      'AnimeJS',
    ],
    githubUrl: 'https://github.com/bancodobrasil/stop-analyzing-embed',
    previewImgSrc: '/images/portfolio/previews/stop-analyzing.png',
  },
  // {
  //   slug: 'vuex-webextensions',
  //   title: 'Vuex Webextensions (open source)',
  //   timeStamp: 0,
  //   description: '',
  //   tech: [],
  //   githubUrl: '',
  //   previewImgSrc: '',
  // },
  // {
  //   slug: 'chromedriver',
  //   title: 'Selenium Chromedriver (open source)',
  //   timeStamp: 0,
  //   description: '',
  //   tech: [],
  //   githubUrl: '',
  //   previewImgSrc: '',
  // },
  {
    slug: 'bex',
    title: 'Ibotta Browser Extension (Contributor)',
    timeStamp: 1639754699396, // December 2021,
    description: 'Get cash back at your favorite stores with the help of Ibotta\'s browser extension.',
    tech: [
      'VueJS',
      'Vuex',
      'React',
      'xState',
      'TypeScript',
      'Node',
      'Jest',
      'Puppeteer',
      'GraphQL',
    ],
    githubUrl: PRIVATE,
    previewImgSrc: '/images/portfolio/previews/ibotta-bex.png',
  },
];
