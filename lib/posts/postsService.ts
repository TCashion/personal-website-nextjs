import { IPost } from '../../types/types';

export const postsData: IPost[] = [
  {
    slug: 'a-letter-to-my-pre-bootcamp-self',
    timeStamp: 1601009408032,
    title: 'A letter to my pre-bootcamp self',
    previewImgSrc: '/images/blog/a-letter.png',
    preview:
      'Enrolling in a bootcamp takes some serious guts. Leaving behind a stable job and regular pay can be daunting. Even if your job is not stable or comfortable, going 12+ weeks without pay is extremely scary...',
    componentName: 'LetterToMyPreBootcampSelf',
  },
  {
    slug: 'hunting-with-my-father',
    timeStamp: 1596009408032,
    title: 'Hunting With My Father',
    previewImgSrc: '/images/blog/hunting-w-my-father.jpg',
    preview:
      'By the late afternoon on day five, I had squandered as many chances as a reasonable person could hope for. My buddies and I had hunted hard, and I was exhausted...',
    componentName: 'HuntingWithMyFather',
  },
  {
    slug: 'just-the-right-thing',
    timeStamp: 1563009408032,
    title: 'Just the Right Thing',
    previewImgSrc:
      '/images/blog/just-the-right-thing/just-the-right-thing-2.jpg',
    preview:
      'The stress was piling on. The "fires" were popping up left and right. Urgent phone calls had to be made. My head was spinning. I had to take a walk...',
    componentName: 'JustTheRightThing',
  },
  {
    slug: 'maf',
    timeStamp: 1554009408032,
    title: 'M.A.F.',
    previewImgSrc: '/images/blog/MAF/MAFTestInitial.jpg',
    preview:
      'The stress was piling on. The "fires" were popping up left and right. Urgent phone calls had to be made. My head was spinning. I had to take a walk...',
    componentName: 'MAF',
  },
  {
    slug: 'one-really-well-written-paragraph',
    timeStamp: 1563009408032,
    title: 'One Really Well-Written Paragraph',
    previewImgSrc: '/images/blog/one-paragraph.jpg',
    preview:
      'A life-altering bit of knowledge can come from one reallywell-written paragraph...',
    componentName: 'OneReallyWellWrittenParagraph',
  },
  {
    slug: 'ritual',
    timeStamp: 1580438545989,
    title: 'Ritual',
    previewImgSrc: '/images/blog/ritual/ritual-2.jpg',
    preview:
      'The order of operations is always the same. We park our trucks at odd angles in the alleyway behind the garage. The radio plays classic rock. We crack open beers immediately upon arrival...',
    componentName: 'Ritual',
  },
  {
    slug: 'most-important-question',
    timeStamp: 1593438545989,
    title: 'The Most Important Question',
    previewImgSrc: '/images/blog/MIQ.jpg',
    preview: 'What is my MIQ?',
    componentName: 'MostImportantQuestion',
  },
  {
    slug: 'where-is-the-fear',
    timeStamp: 1563009408032,
    title: 'Where is the Fear?',
    previewImgSrc: '/images/blog/where-is-the-fear.jpg',
    preview:
      'The Resistance is the enemy within ourselves that opposes all of our most important creative ambitions...',
    componentName: 'WhereIsTheFear',
  },
  {
    slug: 'worn-out-boots',
    timeStamp: 1569009408032,
    title: 'Worn Out Boots',
    previewImgSrc: '/images/blog/newboots.jpg',
    preview:
      'The condition of a hunter’s boots is directly correlated to effort expended in the field. It takes time and mileage to wear out a good pair...',
    componentName: 'WornOutBoots',
  },
];

export const getOnePostData = (slug: string): IPost | undefined => {
  const post = postsData.find((post) => post.slug === slug);
  return post;
};

export const getAllPostSlugs = (): string[] => {
  const postSlugs = postsData.map((post) => post.slug);
  return postSlugs;
};
