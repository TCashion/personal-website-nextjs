import { IPost } from '../../types/types';
import { byNewestFirst } from '../helpers';

export const postsData: IPost[] = [
  {
    slug: 'a-letter-to-my-pre-bootcamp-self',
    date: '09/2020',
    title: 'A letter to my pre-bootcamp self',
    tags: ['Career', 'Learning', 'Reflection', 'Programming'],
    previewImgSrc: '/images/blog/a-letter.png',
    preview:
      'Enrolling in a bootcamp takes some serious guts. Leaving behind a stable job and regular pay can be daunting. Even if your job is not stable or comfortable, going 12+ weeks without pay is extremely scary...',
    componentName: 'LetterToMyPreBootcampSelf',
  },
  {
    slug: 'hunting-with-my-father',
    date: '07/2019',
    title: 'Hunting With My Father',
    tags: ['Family', 'Hunting', 'Outdoors'],
    previewImgSrc: '/images/blog/hunting-w-my-father.jpg',
    preview:
      'By the late afternoon on day five, I had squandered as many chances as a reasonable person could hope for. My buddies and I had hunted hard, and I was exhausted...',
    componentName: 'HuntingWithMyFather',
  },
  {
    slug: 'just-the-right-thing',
    date: '07/2019',
    title: 'Just the Right Thing',
    tags: ['Mindset', 'Reflection', 'Work'],
    previewImgSrc:
      '/images/blog/just-the-right-thing/just-the-right-thing-2.jpg',
    preview:
      'The stress was piling on. The "fires" were popping up left and right. Urgent phone calls had to be made. My head was spinning. I had to take a walk...',
    componentName: 'JustTheRightThing',
  },
  {
    slug: 'maf',
    date: '03/2019',
    title: 'M.A.F.',
    tags: ['Health', 'Learning', 'Running'],
    previewImgSrc: '/images/blog/MAF/MAFTestInitial.jpg',
    preview:
      'The stress was piling on. The "fires" were popping up left and right. Urgent phone calls had to be made. My head was spinning. I had to take a walk...',
    componentName: 'MAF',
  },
  {
    slug: 'one-really-well-written-paragraph',
    date: '07/2019',
    title: 'One Really Well-Written Paragraph',
    tags: ['Learning', 'Reflection', 'Writing'],
    previewImgSrc: '/images/blog/one-paragraph.jpg',
    preview:
      'A life-altering bit of knowledge can come from one reallywell-written paragraph...',
    componentName: 'OneReallyWellWrittenParagraph',
  },
  {
    slug: 'ritual',
    date: '01/2020',
    title: 'Ritual',
    tags: ['Outdoors', 'Hunting'],
    previewImgSrc: '/images/blog/ritual/ritual-2.jpg',
    preview:
      'The order of operations is always the same. We park our trucks at odd angles in the alleyway behind the garage. The radio plays classic rock. We crack open beers immediately upon arrival...',
    componentName: 'Ritual',
  },
  {
    slug: 'most-important-question',
    date: '06/2019',
    title: 'The Most Important Question',
    tags: ['Mindset', 'Reflection'],
    previewImgSrc: '/images/blog/MIQ.jpg',
    preview: 'What is my MIQ?',
    componentName: 'MostImportantQuestion',
  },
  {
    slug: 'where-is-the-fear',
    date: '07/2019',
    title: 'Where is the Fear?',
    tags: ['Creativity', 'Mindset', 'Writing'],
    previewImgSrc: '/images/blog/where-is-the-fear.jpg',
    preview:
      'The Resistance is the enemy within ourselves that opposes all of our most important creative ambitions...',
    componentName: 'WhereIsTheFear',
  },
  {
    slug: 'worn-out-boots',
    date: '09/2019',
    title: 'Worn Out Boots',
    tags: ['Hunting', 'Outdoors', 'Reflection'],
    previewImgSrc: '/images/blog/newboots.jpg',
    preview:
      'The condition of a hunter’s boots is directly correlated to effort expended in the field. It takes time and mileage to wear out a good pair...',
    componentName: 'WornOutBoots',
  },
  {
    slug: 'go-lang',
    date: '11/2022',
    title: 'What I Learned from Learning GoLang',
    tags: ['Career', 'Learning', 'Programming'],
    componentName: 'LearningGolang',
  },
];

export const getSortedPostsData = (): IPost[] => [...postsData].sort(byNewestFirst);

export const getSortedPostTags = (): string[] => {
  const tags = postsData.flatMap((post) => post.tags);
  return Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b));
};

export const filterPostsByTag = (posts: IPost[], tag?: string): IPost[] => {
  if (!tag) {
    return posts;
  }

  return posts.filter((post) => post.tags.includes(tag));
};

export const getOnePostData = (slug: string): IPost | undefined => {
  const post = postsData.find((post) => post.slug === slug);
  return post;
};

export const getAllPostSlugs = (): string[] => {
  const postSlugs = postsData.map((post) => post.slug);
  return postSlugs;
};
